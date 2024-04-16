import React, { Component } from 'react';

class EvenCounterDisplayer extends Component {
    render() {
        const { clickCount } = this.props;
        const evenClicks = Math.floor(clickCount / 2) *2; 
        return <p>Evenly clicked count: {evenClicks} </p>;
    }
}

export default EvenCounterDisplayer;
