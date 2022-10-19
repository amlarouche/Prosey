import React, { Component } from 'react';
import Button from './Button.jsx'

const PromptContainer = (props) => {
    return (
        <div className='prompt'>
            <div className='promptWrapper'>
                <p>{props.prompt}</p>
            </div>
            <input id='input' type='text' placeholder='Reply to prompt here...'/>
            <div className='buttonWrapper'>
                <Button text={'Save'} clickFunction={props.savePrompt}/>
                <Button text={'Cancel'}/>
            </div>
        </div>
    )
}

export default PromptContainer;