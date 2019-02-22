import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import raf from 'raf';
import now from 'right-now';
import * as UI_ACTIONS from '../redux/actions/ui_actions';
import history from '../utils/history';

function Parts(props) {
	return <div className="parts">{props.date}</div>;
};

class Stats extends Component {
	
	start() {
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
            raf(measure)
        })
    };

	componentDidMount() {
		this.start();
		this.timerID = setInterval(
			() => this.props.uiActions.tick(),
			1000
		)
	};

	componentWillUnmount() {
		clearInterval(this.timerID)
	};

	render() {
		const { location, parts, fps } = this.props.ui;
		history.listen((location, action) => {
				this.props.uiActions.changeLocation(history.location.pathname)
		});
		return ( location === '/' ? 
			<div className="Stats">
				<div className="left">
					<Parts date={parts} />
					<div className="text">parts</div>
				</div>
				<div className="right">
					<div className="FPS">{fps}</div>
					<div className="text">fps</div>
				</div>
			</div> : null
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

