import React from 'react';
import classes from './button.module.css'

const Button = (props) => {
    return (
        <button className={classes.button} {...props}>{props.children}</button>
    )
}

export default Button
