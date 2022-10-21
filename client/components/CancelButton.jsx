import React, { Component } from 'react';


const CancelButton = (props) => {
    return (
        <button className='cancelButton' onClick={props.cancel}>Cancel</button>
    )
}

export default CancelButton;