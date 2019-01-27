import React, { Component } from 'react';
import raf from 'raf';
import now from 'right-now';

class FPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fps: window.fps ? window.fps : null
        }
        this.Fps = this.Fps.bind(this);
    };

    componentDidMount() {
        this.Fps();
    }

    Fps() {
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
                self.setState({
                    fps: (values[values.length - 1] * max).toFixed(0)
                })
            };
            raf(measure)
        });
    }

    render() {
        return (<div className="FPS">{this.state.fps}</div>)
    }
}

export default FPS;