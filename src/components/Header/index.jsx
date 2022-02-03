import React, { Component } from "react";
import Counter from "../App";

class Header extends Component {
    
    add = () => {
        this.props.add();
    };

    minus = () => {
        this.props.minus();
    }

    render() {
        return (
            <div>
                <h1>React Counters</h1>
                <button onClick={this.add}>
                    +
                </button>
                <button onClick={this.minus}>
                    -
                </button>
            </div>
        )
    }
}

export default Header;
