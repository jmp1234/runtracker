import React, { Component } from 'react';

class FormatTime extends Component {
    constructor(props) {
        super(props);
        // this.timerStyle = {
        //     display: 'inline-block',
        //     position: 'relative',
        //     left: '50%',
        //     transform: 'translate(-50%)',
        //     width: '383px'
        // }
    }
    millisecondsToTime() {
        const { elapsed } = this.props;
        const sec = elapsed / 1000;
        const min = sec / 60;
        return {
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            // ms: Math.floor(elapsed % 100)
        }
    }
    leadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }
    trailingZero(number) {
        return number < 10 ? `0${number}` : number;
    }
    render() {
        const { hour, min, sec} = this.millisecondsToTime();

        return (
            <div style={this.timerStyle}>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}</div>
        )
    }
}

export default FormatTime;
