import React, { Component } from "react";
import CounterList from "../CounterList";
import Header from "../Header";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numCounter: 0,
        }
    }

    add = () => {
        console.log("add");
        let moreCounter = this.state.numCounter + 1;
        this.setState({
            numCounter: moreCounter,
        });
        console.log(this.state.numCounter);
    };

    minus = () => {
        console.log("minus");
        let lessCounter = this.state.numCounter - 1;
        this.setState({
            numCounter: lessCounter,
        });
        console.log(this.state.numCounter);
    };

    render() {
        return (
            <div className="App">
            <Header add={this.add} minus={this.minus}/>
            <CounterList numCounter={this.state.numCounter}/>
            </div>
        );
    }
}

export default App;