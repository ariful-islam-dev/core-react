import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';




const Form = props => {
    
    return (
        <form onSubmit={props.handleSubmit} >
            <TextInput
                name="name"
                label="Enter Name"
                placeholder="Provide your name"
                value={props.values.name}
                onChange={props.handleChange}
            />
            <TextInput
                name="email"
                type="email"
                label="Enter email"
                placeholder="Provide your email"
                value={props.values.email}
                onChange={props.handleChange}
            />
            <TextInput
                name="password"
                type="password"
                label="Enter Password"
                placeholder="*************"
                value={props.values.password}
                onChange={props.handleChange}
            />
            <button type="submit">Submit</button>
        </form >
    )
}
Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Form;