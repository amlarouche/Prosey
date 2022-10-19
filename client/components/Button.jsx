import React, { Component } from 'react';


const Button = (props) => {
    return (
        <button className='buttonClass' onClick={props.clickFunction}>{props.text}</button>
    )
}

export default Button;