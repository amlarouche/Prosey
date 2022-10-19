import React, { Component } from 'react';

const PromptComponent = (props) => {
    const { 
        prompt,
        createdAt
    } = props.display;

    return (
        <div className='promptCom'>
            <span>Created: {createdAt}</span>
            <br/>
            <p>{prompt}</p>
        </div>
    )
}

export default PromptComponent;