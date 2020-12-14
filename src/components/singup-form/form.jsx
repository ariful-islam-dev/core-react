import PropTypes from 'prop-types'
import React from 'react'
import RadioInput from './radioInput'
import TextInput from './textInput'

const Form = ({ values, handleChange, handleSubmit, agreement, handleAgreement, errors }) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                className="form-group"
                label="Enter Your Name"
                type="text"
                name="name"
                value={values.name}
                error={errors.name}
                placeholder="Provide your name"
                onChange={handleChange}

            />
            <TextInput
                className="form-group"
                label="Enter Your Email Address"
                type="email"
                name="email"
                value={values.email}
                error={errors.email}
                placeholder="Provide your email"
                onChange={handleChange}

            />
            <TextInput
                className="form-group"
                label="Enter Your Password"
                type="password"
                name="password"
                value={values.password}
                error={errors.password}
                placeholder="**********"
                onChange={handleChange}

            />
            <TextInput
                className="form-group"
                label="Enter Your Date Of Birth"
                type="date"
                name="birthDate"
                value={values.birthDate}
                error={errors.birthDate}
                onChange={handleChange}
            />
            <div className="form-group">
                <label>Gender: </label> <br />
                <RadioInput
                    type="radio"
                    name="gender"
                    value="male"
                    label="Male"
                    onChange={handleChange}
                />
                <RadioInput
                    type="radio"
                    name="gender"
                    value="female"
                    label="Female"
                    onChange={handleChange}
                />
                <RadioInput
                    type="radio"
                    name="gender"
                    value="other"
                    label="Other"
                    onChange={handleChange}
                /><br/>
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
            <div className="form-group">
                <label >
                    <input 
                    className="form-group"
                    type="checkbox" 
                    name="agreement" 
                    checked={agreement} 
                    onChange={handleAgreement} />
                    I Agree your all Terms and Condition
                </label>
            </div>
            <button className="btn btn-primary" type="submit" disabled={!agreement}>Create  User</button>
        </form>
    )
}
Form.propType={
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired
}

export default Form;
