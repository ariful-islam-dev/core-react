import React, { useState } from 'react'
import Form from './form';
import PropTypes from 'prop-types';



const SingupForm = (props) => {
    const initValues = {
        name: '',
        email: '',
        password: '',
        birthDate: '',
        gender: ''
    }

    const [state, setstate] = useState({
        values: initValues,
        agreement: false,
        errors: initValues
    });



    const handleChange = event => {
        // const { errors } = validate()
        setstate({
            errors: state.errors,
            values: {
                ...state.values,
                [event.target.name]: event.target.value,
            },

        })
    }
    const handleAgreement = event => {

        setstate({
            errors: state.errors,
            values: state.values,
            agreement: event.target.checked,
        })
    }
    const handleSubmite = event => {
        event.preventDefault()
        const { isValid, errors } = validate()
        if (isValid) {
            props.createUser(state.values)
            console.log(state);
            event.target.reset();
            setstate({

                values: initValues,
                agreement: false,
                errors: state.errors

            })
        } else {
            console.log(errors);
            event.target.reset();
            setstate({
                agreement: false,
                values: initValues,
                errors,

            })
        }

    }
    const validate = () => {
        const errors = {}
        const { values: { name, email, password, gender, birthDate } } = state;
        if (!name) {
            errors.name = 'Please Provide Your Name'
        } else if (name.length > 30) {
            errors.name = 'Your Name Must be lessthan 30 Charecter'
        }
        if (!email) {
            errors.email = 'Please Provide Valide Email Address'
        }
        if (!password) {
            errors.password = 'Please Provide Your Valid Password'
        } else if (password.length <= 6) {
            errors.password = 'Your Name Must be Grater Than 06 Charecter'
        }
        if (!birthDate) {
            errors.birthDate = "Date of Birth is must be Require"
        }
        if (!gender) {
            errors.gender = "Select your Gender"
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }

    }
    return (
        <div>
            <h1>Singup Form</h1>
            <Form
                values={state.values}
                agreement={state.agreement}
                handleAgreement={handleAgreement}
                errors={state.errors}
                handleChange={handleChange}
                handleSubmit={handleSubmite}
            />
        </div>
    )
}
SingupForm.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SingupForm;
