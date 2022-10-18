import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import Heading from './Heading.jsx'
import PromptContainer from './PromptContainer.jsx'
import styles from '../scss/styles.scss'

const MainContainer = (props) => {
    return (
        <div className='mainContainer'>
            <Sidebar />
            <Heading />
            <PromptContainer />
        </div>
    )
}

export default MainContainer;