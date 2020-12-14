import React, { Component } from 'react'

class ControlledForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
        // event.target.reset()
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
        const { name, email, password } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control"
                        type="text "
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={this.handleChange} />
                    <input
                        className="form-control"
                        type="email "
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={this.handleChange} />
                    <input
                        className="form-control"
                        type="password "
                        name="password"
                        placeholder="****************"
                        value={password}
                        onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ControlledForm;
