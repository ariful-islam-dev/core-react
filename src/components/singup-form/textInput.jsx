
import React from 'react'
import PropTypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="{props.name}" >{props.label}</label>
            <input
                className={props.error ? 'form-control is-invalid' : 'form-control'}
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            {props.error && <div className="invalid-feedback">{props.error}</div> }
        </div>
    )
}



TextInput.prototype = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    error: ''
}


export default TextInput;