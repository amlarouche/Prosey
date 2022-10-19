import React, { Component } from 'react';


const DeleteButton = (props) => {
    return (
        <button className='smallButton' onClick={() => { props.deleteVal(props.id) }}>Delete</button>
    )
}

export default DeleteButton;