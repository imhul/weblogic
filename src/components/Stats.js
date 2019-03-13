import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import raf from 'raf';
import now from 'right-now';
import * as UI_ACTIONS from '../redux/actions/ui_actions';

class Stats extends Component {
	
		start() {
				// TODO: get stop this function in folio
        let count = 0;
        let lastTime = 0;
        const values = [];
        let period = 1000;
        let max = 90;
        const self = this;
        raf(function measure() {
						
            count++;
						let t = now();
								
						if (t - lastTime > period) {
								lastTime = t;
								values.push(count / (max * period * 0.001));
								count = 0;
								self.props.uiActions.getFPS(
										(
												values[values.length - 1] * max
										).toFixed(0)
								)
						};
						raf(measure);
        })
    };

		mount() {
			this.start();
			this.timerID = setInterval(
					() => this.props.uiActions.tick(),
			1000 );
		};

	componentDidMount() {
			this.mount()
	};

	componentWillUnmount() {
		clearInterval(this.timerID);
	};

	render() {
		const { parts, fps } = this.props.ui;

		const Parts = (props) => {
				return <div className="parts">{props.date}</div>
		};

		return ( 
			<div className="Stats" id="stats">
				<div className="left">
					<Parts date={parts} />
					<div className="text">parts</div>
				</div>
				<div className="right">
					<div className="FPS">{fps}</div>
					<div className="text">fps</div>
				</div>
			</div>
		)	
	}
};

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

