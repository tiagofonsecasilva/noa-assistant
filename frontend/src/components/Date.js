import React, { Component } from 'react';

export default class CurrentDate extends Component {
    state = {
        curTime: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="App">
                <img
                className="akar-iconscalendar"
                src="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/akar-icons-calendar@2x.svg"
              alt=""/><p style={{color: "white"}}>Today : {this.state.curTime}</p>
            </div>
        );
    }
}