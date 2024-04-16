import React, { Component } from 'react';
import EvenCounterDisplayer from './EvenCounterDisplayer';
import './button.css'
class MyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        };
    }

    allClicksCounter = () => {
        this.setState(prevState => ({
            clickCount: prevState.clickCount + 1
        }));
    };

    render() {
        return (
            <div>
                <button className='btn' onClick={this.allClicksCounter}>Click me</button>
                <p>All Clicked count: {this.state.clickCount}</p>
                <EvenCounterDisplayer clickCount={this.state.clickCount} />
            </div>
        );
    }
}

export default MyCounter;
