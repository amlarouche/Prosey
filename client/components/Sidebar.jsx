import React, { Component, useState } from 'react';
import PromptComponent from './PromptComponent.jsx';

const Sidebar = (props) => {
    const { promptList, beingEdited, editValue } = props
    const promptsDisplay = [];
    for (let i = 0; i < promptList.length; i++) {
        promptsDisplay.push(<PromptComponent key={'a'[i]} display={promptList[i]} beingEdited={beingEdited} editValue={editValue}/>)
    }

    return (
        <div className='sidebar'>
            <h2>Previous Prompts</h2>
            <div className='sideWrapper'>
                <div className='completedWrapper'>
                    {promptsDisplay}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;