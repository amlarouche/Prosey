import React, { useEffect, useState } from 'react';
import EditButton from './EditButton.jsx';
import DeleteButton from './DeleteButton.jsx';

const PromptComponent = (props) => {
    const { beingEdited, editValue, deleteVal } = props;
    let { 
        prompt,
        createdAt,
        _id
    } = props.display;
    prompt = prompt.slice(0, 32);
    createdAt = createdAt.slice(0, 10);
    const [checker, clickPrompt] = useState(() => false)
    
    function promptClicked(e) {
        clickPrompt(prevCheck => !prevCheck)
    }
    return (
        <div className='promptCom' onClick={promptClicked}>
            <span>Created: {createdAt}</span>
            <br/>
            <p>{prompt}...</p>
            {checker && (<div className='displayDiv'>
                <EditButton editValue={editValue} id={_id}/> <DeleteButton deleteVal={deleteVal} id={_id}/>
            </div>)}
        </div>
    )
}

export default PromptComponent;