import React from 'react';

const MyProps = (props)=>{
    console.log('MyProps- ', props.name);
    return(
        <h1>My Name is {props.name}</h1>
    )
}
export default MyProps;