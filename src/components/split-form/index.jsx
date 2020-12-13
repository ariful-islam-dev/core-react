import React, { Component } from 'react';
import Form from './form';






class SplitForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {

        return (
            <div>
                <Form
                    values = {this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default SplitForm;
