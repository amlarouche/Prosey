import React, { Component } from 'react';
import SaveButton from './SaveButton.jsx';
import Button from './Button.jsx';

const PromptContainer = (props) => {
    return (
        <div className='prompt'>
            <div className='promptWrapper'>
                <p>{props.prompt}</p>
            </div>
            <input id='input' type='text' placeholder='Reply to prompt here...'/>
            <div className='buttonWrapper'>
                <SaveButton text={'Save'} savePrompt={props.savePrompt}/>
                <Button text={'Cancel'}/>
            </div>
        </div>
    )
}

export default PromptContainer;