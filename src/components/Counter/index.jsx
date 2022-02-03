import React, { Component } from "react";

class Counter extends Component {

    state = {
        dopenessCount: 0,
    };

    increaseDopeness = () => {
        let moreDope = this.state.dopenessCount + 1;
        this.setState({
            dopenessCount: moreDope,
        });
    };

    decreaseDopeness = () => {
        let lessDope = this.state.dopenessCount - 1;
        this.setState({
            dopenessCount: lessDope,
        });
    };

    render() {
        return (
            <div className="Counter">
                <h4>Counter : {this.state.dopenessCount}</h4>
                <button onClick={this.decreaseDopeness}>Decrement</button>
                <button onClick={this.increaseDopeness}>Increment</button>
            </div>
        );
    }
}

export default Counter;