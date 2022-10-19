import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import Heading from './Heading.jsx'
import PromptContainer from './PromptContainer.jsx'
import styles from '../scss/styles.scss'
import axios from 'axios';


class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            prompts: 'Wait for your prompt to be generated!',
            promptList: [],
            beingEdited: false
        };
        this.generatePrompt = this.generatePrompt.bind(this);
        this.savePrompt = this.savePrompt.bind(this);
        this.loadPrompts = this.loadPrompts.bind(this);
        this.editValue = this.editValue.bind(this);
    }

    componentDidMount() {
        this.loadPrompts();
    }

    generatePrompt(e) {
        axios('/prompts')
            .then(res => {
                const prompt = res.data;
                this.setState({ prompts: prompt })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    savePrompt(e) {
        const field = document.getElementById('input')
        const value = field.value;
        field.value = '';
        axios.post('/prompts', {
             prompt: value
        })
            .then(res => console.log('here is the resolution', res))
            .catch(err => console.log(err))
        this.loadPrompts();
    }

    loadPrompts() {
        axios('/saved')
            .then(res => {
                const list = res.data;
                this.setState({ promptList: list })
            })
    }

    editValue(num) {
        const field = document.getElementById('input');
        console.log(num);
        fetch('/prompts/' + new URLSearchParams({ num }))
            .then((res) => res.json())
            .then(res => field.value = res)
            .catch(err => console.log('axios error', err))
    }

    render() {
        return (
        <div className='mainContainer'>
            <Sidebar promptList={this.state.promptList} beingEdited={this.state.beingEdited} editValue={this.editValue}/>
            <Heading generatePrompt={this.generatePrompt} />
            <PromptContainer prompt={this.state.prompts} savePrompt={this.savePrompt}/>
        </div>
        )
    }
}

export default MainContainer;