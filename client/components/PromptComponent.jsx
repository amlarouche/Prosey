import React, { useEffect, useState } from 'react';
import EditButton from './EditButton.jsx';
import DeleteButton from './DeleteButton.jsx';

const PromptComponent = (props) => {
    const { beingEdited, editValue } = props;
    let { 
        prompt,
        createdAt,
        _id
    } = props.display;
    prompt = prompt.split('').slice(0, 32).join('');
    createdAt = createdAt.split('').slice(0, 10).join('');
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
                <EditButton editValue={editValue} id={_id}/> <DeleteButton id={_id}/>
            </div>)}
        </div>
    )
}

export default PromptComponent;