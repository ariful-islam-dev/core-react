import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = (props) => {
    return (
        <label htmlFor={props.value} className="mx-2">
            <input
                type={props.type}
                name={props.name}
                id={props.value}
                value={props.value}
                onChange={props.onChange}
            />
            {props.label}
        </label>

    )
}

RadioInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired

}
RadioInput.defaultProps ={
    type: 'radio',
    name:'gender'
}

export default RadioInput
