import React, { Component } from 'react';


const CancelButton = (props) => {
    return (
        <button className='buttonClass' onClick={props.cancel}>{props.text}</button>
    )
}

export default CancelButton;