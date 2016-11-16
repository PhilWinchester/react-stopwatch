import React, { Component } from 'react';
import Stopwatch from './Stopwatch';

export default class App extends Component {
  constructor() {
    super();

    this.running = false;

    this.state = {
      timerID: 0,
    }
  }

  timerHandler() {
    // this.counter++;
    // let mill = document.querySelector('#milliseconds');
    // let seco = document.querySelector('#seconds');
    // let mins = document.querySelector('#minutes');

    console.log(this.running);

    if (this.running) {
      console.log('running');
    }

  }

  handleStartClick(e) {
    this.running = !this.running;
    console.log(this.running);
    let timer = setInterval(this.timerHandler, 100)
    this.setState({
      timerID : timer,
    })
  }

  handleStopClick(e) {
    console.log('stop', this.state.timerID);
    this.running = !this.running;
  }

  handleResetClick(e) {
    console.log('reset', this.state.timerID);
    clearInterval(this.state.timerID);
    this.running = false;
  }

  render() {
    return (
      <div>
        <Stopwatch
          handleStart={ev => this.handleStartClick(ev)}
          handleStop={ev => this.handleStopClick(ev)}
          handleReset={ev => this.handleResetClick(ev)}
        />
      </div>
    );
  }
}
