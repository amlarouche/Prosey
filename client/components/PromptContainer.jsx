import React, { Component } from 'react';
import SaveButton from './SaveButton.jsx';
import CancelButton from './CancelButton.jsx';

const PromptContainer = (props) => {

    return (
        <div className='prompt'>
            <div className='promptWrapper'>
                <p>{props.prompt}</p>
            </div>
            <textarea id='input' type='text' placeholder='Reply to prompt here...'/>
            <div className='buttonWrapper'>
                <SaveButton text={'Save'} savePrompt={props.savePrompt}/>
                <CancelButton cancel={props.cancelThis} text={'Cancel'}/>
            </div>
        </div>
    )
}

export default PromptContainer;