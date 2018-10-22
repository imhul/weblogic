import React, { Component } from 'react';

const Stats = () => {
    let startTime = Date.now();
    let prevTime = startTime;
    let ms = 0;
    let msMin = Infinity;
    let msMax = 0;
    let fps = 0;
    let fpsMin = Infinity;
    let fpsMax = 0;
    let frames = 0;
    const container = document.createElement('div');
    container.id = 'stats';
    const fpsDiv = document.createElement('div');
    fpsDiv.id = 'fps';
    container.appendChild(fpsDiv);
    const fpsDesc = document.createElement('div');
    fpsDesc.id = 'fpsDesc';
    fpsDesc.textContent = "fps";
    fpsDiv.appendChild(fpsDesc);
  
    const fpsText = document.createElement('div');
    fpsText.id = 'fpsText';
    fpsDiv.appendChild(fpsText);
    const setMode = () => {
      fpsDiv.style.display = 'block';
    };
    const updateGraph = (dom, value) => {
      const child = dom.appendChild(dom.firstChild);
      child.style.height = `${value}px`;
    };
    return {
      REVISION: 12,
      domElement: container,
      setMode,
      begin() {
        startTime = Date.now();
      },
      end() {
        const time = Date.now();
        ms = time - startTime;
        msMin = Math.min(msMin, ms);
        msMax = Math.max(msMax, ms);
        frames++;
        if (time > prevTime + 1000) {
          fps = Math.round((frames * 1000) / (time - prevTime));
          fpsMin = Math.min(fpsMin, fps);
          fpsMax = Math.max(fpsMax, fps);
          fpsText.textContent = fps;
          prevTime = time;
          frames = 0;
        }
        return time;
      },
      update() {
        startTime = this.end();
      }
    }
  };

function updateAll() {
    let count_parts;
    let stats;
    let update;
    const containerMain = document.querySelector('.count-parts');
    const partsDesc = document.createElement('div');
    stats = new Stats;
    stats.setMode(0);
    document.body.appendChild(stats.domElement);
    count_parts = document.querySelector('.js-count-parts');
    partsDesc.id = 'partsDesc';
    partsDesc.innerHTML = 'parts';
    containerMain.appendChild(partsDesc);
    update = () => {
      if (stats) {
        stats.begin();
        stats.end();
        if (window.bgJSDom[0].bgJS.parts && window.bgJSDom[0].bgJS.parts.array) {
          count_parts.innerText = window.bgJSDom[0].bgJS.parts.array.length;
        }
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        updateAll()
    }

    render() {
        return (
            <div className="Stats">
                <div className="parts"></div>
                <div className="fps"></div>
            </div>
        ) 
    }
}

export default Stats;
