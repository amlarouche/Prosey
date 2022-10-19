import React, { Component } from 'react';
import PromptComponent from './PromptComponent.jsx';

const Sidebar = (props) => {
    const { promptList } = props
    const promptsDisplay = [];
    for (let i = 0; i < promptList.length; i++) {
        promptsDisplay.push(<PromptComponent key={'a'[i]} display={promptList[i]} />)
    }   
    return (
        <div className='sidebar'>
            <h2>Previous Prompts</h2>
            {promptsDisplay}
        </div>
    )
}

export default Sidebar;