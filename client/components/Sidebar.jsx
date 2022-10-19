import React, { Component } from 'react';
import PromptComponent from './PromptComponent.jsx';

const Sidebar = (props) => {
    const { promptList, beingEdited } = props
    const promptsDisplay = [];
    for (let i = 0; i < promptList.length; i++) {
        promptsDisplay.push(<PromptComponent key={'a'[i]} display={promptList[i]} beingEdited={beingEdited}/>)
    }   
    return (
        <div className='sidebar'>
            <div className='sideWrapper'>
                <h2>Previous Prompts</h2>
                {promptsDisplay}
            </div>
        </div>
    )
}

export default Sidebar;