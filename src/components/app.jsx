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
    render() {

        return (
            <div className="App">
                <h1>Why do we need state</h1>
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    // this.count++ ;
                    this.setState(prev => {
                        return {
                            count: prev.count + 1
                        }
                    },()=>{
                        console.log('Clicked...', this.state.count);
                    })
                    // console.log('Clicked...', this.state.count);

                }}>Add + 1</button>
            </div>
        );
    }
}

export default App;

//5.2 Done