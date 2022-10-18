import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import Heading from './Heading.jsx'
import PromptContainer from './PromptContainer.jsx'

const MainContainer = (props) => {
    return (
        <div>
            <p>'Hi there'</p>
            <Sidebar />
            <Heading />
            <PromptContainer />
        </div>
    )
}

export default MainContainer;