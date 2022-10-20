import React, { Component } from 'react';


const CancelButton = (props) => {
    return (
        <button className='cancelButton' onClick={props.cancel}>{props.text}</button>
    )
}

export default CancelButton;