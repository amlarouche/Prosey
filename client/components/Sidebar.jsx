import React, { Component, useState } from 'react';
import PromptComponent from './PromptComponent.jsx';

const Sidebar = (props) => {
    const { promptList, beingEdited, editValue, deleteVal } = props
    const promptsDisplay = [];
    for (let i = 0; i < promptList.length; i++) {
        promptsDisplay.push(<PromptComponent key={'a'[i]} display={promptList[i]} beingEdited={beingEdited} editValue={editValue} deleteVal={deleteVal}/>)
    }
    // const [checker, clickPrompt] = useState(() => false)
    
    // function promptClicked(e) {
    //     clickPrompt(prevCheck => !prevCheck)
    // }
    return (
        <div className='sidebar'>
            {!promptsDisplay.length && (<h3>Hey, it's empty here... shouldn't you be writing?</h3>)}
            <div className='sideWrapper'>
                <div className='completedWrapper'>
                    {promptsDisplay}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;