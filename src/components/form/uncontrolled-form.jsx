import React, { Component } from 'react'

class UncontrolledForm extends Component {
    handleSubmit = event => {
        event.preventDefault()
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value
        console.log(data);
        event.target.reset()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text " name="name" placeholder="Your Name" />
                    <input className="form-control" type="email " name="email" placeholder="Your Email" />
                    <input className="form-control" type="password " name="password" placeholder="****************" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UncontrolledForm;
