import React, { Component } from 'react';
import Button from './Button.jsx'

const PromptContainer = (props) => {
    return (
        <div className='prompt'>
            <p>{props.prompt}</p>
            <input type='text' placeholder='Reply to prompt here...'/>
            <div className='buttonWrapper'>
                <Button text={'Save'}/>
                <Button text={'Cancel'}/>
            </div>
        </div>
    )
}

export default PromptContainer;