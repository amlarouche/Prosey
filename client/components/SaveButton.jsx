import React, { Component } from 'react';


const SaveButton = (props) => {
    return (
        <button className='buttonClass' onClick={props.savePrompt}>Save</button>
    )
}

export default SaveButton;