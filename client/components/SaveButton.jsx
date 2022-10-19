import React, { Component } from 'react';


const SaveButton = (props) => {
    return (
        <button className='buttonClass' onClick={props.savePrompt}>{props.text}</button>
    )
}

export default SaveButton;