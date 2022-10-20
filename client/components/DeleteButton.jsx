import React, { Component } from 'react';


const DeleteButton = (props) => {
    return (
        <button className='cancelButton' onClick={() => { props.deleteVal(props.id) }}>Delete</button>
    )
}

export default DeleteButton;