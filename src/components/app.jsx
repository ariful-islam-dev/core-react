import React, { Component } from 'react';
import classes from './app.module.css';
import Inputs from './inputs/index'


class App extends Component {

  
    render() {

        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Working with Forms in React</h1>
                <hr/>
                <Inputs/>
            </div>

        );
    }
}

export default App;
// 8.2 Done

