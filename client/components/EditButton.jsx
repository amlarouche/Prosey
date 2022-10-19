import React, { Component } from 'react';


const EditButton = (props) => {
    return (
        <button className='smallButton' onClick={() => { props.editValue(props.id) }}>Edit</button>
    )
}

export default EditButton;