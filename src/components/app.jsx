import React, { Component } from 'react';
import classes from './app.module.css';


class App extends Component {

    state = {
        name: '',
    }

    handleButtonClick = (event) => {
        console.log(event.target);
        // console.log('I am cute littel button');
    }
    handleChange = (event) => {
        this.setState({ name: event.target.value })
        // console.log(event.target.value);
    }
    handleFocus = (event)=>{
        console.log('I am Focus');
    }
    handleBlur=(event)=>{
        if(!this.state.name){
            alert('Please Enter Your Name')
        }
        console.log('I am blur event');
    }
    render() {

        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Events in React</h1>
                <button
                    className={classes.Btn}
                    onClick={this.handleButtonClick}
                >Click Me!</button>
                <br />
                <input
                    onChange={this.handleChange}
                    className={classes.TextFild}
                    value={this.state.name}
                    type="text"
                    placeholder="Enter some text"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <br />
                <br />
                {
                    this.state.name && <h3>Welcome, {this.state.name}</h3>
                }
            </div>

        );
    }
}

export default App;

