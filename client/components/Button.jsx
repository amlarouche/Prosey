import React, { Component } from 'react';


const Button = (props) => {
    return (
        <button className='buttonClass' onClick={props.genPrompt}>{props.text}</button>
    )
}

export default Button;