import React, { Component } from 'react';
import Button from './Button.jsx'

const PromptContainer = (props) => {
    return (
        <div className='prompt'>
            <p>Insert prompt here probably</p>
            <input type='text' placeholder='Reply to prompt here...'/>
            <div className='buttonWrapper'>
                <Button />
                <Button />
            </div>
        </div>
    )
}

export default PromptContainer;