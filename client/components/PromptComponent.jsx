import React, { useState } from 'react';
import EditButton from './EditButton.jsx';
import DeleteButton from './DeleteButton.jsx';

const PromptComponent = (props) => {
    const { beingEdited } = props;
    const { 
        prompt,
        createdAt
    } = props.display;

    const [checker, clickPrompt] = useState(() => false)
    
    function promptClicked(e) {
        clickPrompt(prevCheck => !prevCheck)
    }

    return (
        <div className='promptCom' onClick={promptClicked}>
            <span>Created: {createdAt}</span>
            <br/>
            <p>{prompt}</p>
            {checker && (<div className='displayDiv'>
                <EditButton /> <DeleteButton />
            </div>)}
        </div>
    )
}

export default PromptComponent;