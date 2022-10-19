import React, { Component } from 'react';
import Button from './Button.jsx'

const Heading = (props) => {
    return (
        <div className='header'>
            <h1>Prosey: Your Friend for Prompts</h1>
            <Button clickFunction={props.generatePrompt} text={'Generate Prompt!'}/>
        </div>
    )
}

export default Heading;