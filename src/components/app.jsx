import React, { Component, Profiler } from 'react';
import Profile from './profile'
import Bio from './profile/Bio';
import MyProps from './props';
// import Skills from './profile/Skills';

class Child extends Component {
    render() {
        this.props.func(this)
        return <h1>I am child</h1>
    }
}

const ChildComponent = (props) => {
    return (
        <div>
            <h3>I am Child Component</h3>
            <p>
                I don't know what to do
            </p>
            {props.children}
        </div>
    )
}

class App extends Component {

    // constructor(props) {
    //     super(props)
    //     this.count = 5;
    //     this.state = {
    //         count: 0        }
    // }
    // count = 10
    state = {
        count: 0,

    }
    intervalId = null;
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount = () => {

        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }
    startTimer = ()=>{
        if(this.state.count > 0 && !this.intervalId){
            this.intervalId = setInterval(()=>{
                this .setState({count:this.state.count -1}, ()=>{
                    if(this.state.count === 0){
                        alert('Timer Finished')
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            }, 1000)
        }
    }
    stopTimer = ()=>{
        if(this.intervalId){
            clearInterval(this.intervalId);
            this.intervalId = null
        }
    }
    resetTimer = ()=>{
        this.setState({count: 0});
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    render() {

        return (
            <div className="App">
                <h1 className="Heading">Simple timer</h1>
                <div className="Container">
                    <button className="Btn" onClick={this.decrementCount}>-</button>
                    <span className="text">{this.state.count}</span>
                    <button className="Btn" onClick={this.incrementCount}>+</button>
                </div>
                <div className="Container">
                    <button onClick={this.startTimer}className="Btn">Start</button>
                    <button onClick={this.stopTimer} className="Btn">Stop</button>
                    <button onClick={this.resetTimer} className="Btn">Reset</button>
                </div>
            </div>
        );
    }
}

export default App;

//5.2 Done