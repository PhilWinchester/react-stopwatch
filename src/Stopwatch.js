import React, { Component } from 'react';
import './App.css';

export default class Stopwatch extends Component {
  render() {
    return (
      <div>
        <h1>Stopwatch</h1>
        <div id="stopwatch-container" >
          <span id="minutes">00</span>:
          <span id="seconds">00</span>:
          <span id="milliseconds">00</span>
        </div>
        <button onClick={this.props.handleStart} >Start</button>
        <button onClick={this.props.handleStop} >Stop</button>
        <button onClick={this.props.handleReset} >Reset</button>
      </div>
    );
  }
}
