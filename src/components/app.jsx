import React, { Component, Profiler } from 'react';
import Button from './button';
import './app.css';
import BoxB from './box_b';
import BoxA from './box_a';

import './app.css';
import './button.module.css'

const myHeader = {
    color: 'blue',
    fontWeight: 300,
    fontFamily: 'Arial',
    fontSize: '36px'
}
class App extends Component {



    render() {

        return (
            <div className="App">
                <h1 style={myHeader}>How to Style Rect App</h1>
                <h1 style={{
                    color: 'blue',
                    fontWeight: 300,
                    fontFamily: 'Arial',
                    fontSize: '36px'
                }}>Another Header Tag</h1>
                <Button >Click Me</Button>
                <BoxA></BoxA>
                <BoxB></BoxB>
                <button className="button">Another</button>
            </div>
        );
    }
}

export default App;

//6.1 Done