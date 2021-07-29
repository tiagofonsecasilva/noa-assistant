import React, { Component } from 'react';

export default class CurrentDate extends Component {
    state = {
        curTime: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="App">

<p style={{color: "white"}}>{this.state.curTime}</p>
            </div>
        );
    }
}