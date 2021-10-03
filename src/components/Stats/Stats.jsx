import React, { Component } from 'react';
// utils
import raf from 'raf';
import now from 'right-now';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fps: 0,
            parts: 0,
            period: 1000
        };
    }

    setFPS(values, max) {
        this.setState({ fps: (values[values.length - 1] * max).toFixed(0) });
    }

    start() {
        const self = this;
        let count = 0;
        let lastTime = 0;
        const values = [];
        let max = 90;
        raf(function measure() {
            count++;
            let t = now();
            if (t - lastTime > self.period) {
                lastTime = t;
                values.push(count / (max * self.period * 0.001));
                count = 0;
                self.setFPS(values, max);
            }
            raf(measure);
        });
    }

    componentDidMount() {
        this.start();
        this.timerID = setInterval(() => {
            this.setState({ parts: window.bgJSDom[0].bgJS.parts.array.length });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.setState({ fps: 0, parts: 0, period: 0 });
    }

    render() {
        return (
            <div className="Stats" id="stats">
                <div className="left">
                    <div className="parts">{this.state.parts}</div>
                    <div className="text">parts</div>
                </div>
                <div className="right">
                    <div className="FPS">{this.state.fps}</div>
                    <div className="text">fps</div>
                </div>
            </div>
        );
    }
}

export default Stats;
