import React, { Component } from 'react';
import FPS from './FPS';
import history from '../utils/history/history';

function Parts(props) {
	return <div className="parts">{props.date}</div>;
};

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			parts: window.bgJSDom[0].bgJS.parts.array ?
				window.bgJSDom[0].bgJS.parts.array.length : null,
		}
	};

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		)
	};

	componentWillUnmount() {
		clearInterval(this.timerID)
	};

	tick() {
		this.setState({
			parts: window.bgJSDom[0].bgJS.parts.array.length
		})
	};

	render() {
		if( history.location.pathname === '/' ) {
			return (
				<div className="Stats">
					<div className="left">
						<Parts date={this.state.parts} />
						<div className="text">parts</div>
					</div>
					<div className="right">
						<FPS />
						<div className="text">fps</div>
					</div>
				</div>
			)	
		} else { return null }
	}
};

export default Stats;
