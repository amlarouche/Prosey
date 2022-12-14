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
            beingEdited: false,
            currentId: 0
        };
        this.generatePrompt = this.generatePrompt.bind(this);
        this.savePrompt = this.savePrompt.bind(this);
        this.loadPrompts = this.loadPrompts.bind(this);
        this.editValue = this.editValue.bind(this);
        this.deleteVal = this.deleteVal.bind(this);
        this.cancelThis = this.cancelThis.bind(this);
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

    async savePrompt() {
        const field = document.getElementById('input')
        const value = field.value;
        field.value = '';
        if (this.state.currentId) {
           axios.patch('/saved', { _id: this.state.currentId, prompt: value })
                .then(res => console.log('here is the resolution', res))
                .catch(err => console.log(err))
            this.setState({
                beingEdited: false,
                currentId: 0
            });    
        } 
        else {
            axios.post('/prompts', {
                prompt: value
            })
                .then(res => console.log('here is the resolution', res))
                .catch(err => console.log(err))
        }
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
        this.setState({
            beingEdited: true,
            currentId: num
        });
        fetch('/prompts/' + new URLSearchParams({ num }))
            .then((res) => res.json())
            .then(res => field.value = res)
            .catch(err => console.log(err))
    }

    async deleteVal(num) {    
        await axios.delete('/prompts', { data: { num } })
            .then(res => console.log(res))
            .catch(err => console.log('big error', err))
        this.loadPrompts();
    }

    cancelThis() {
        const field = document.getElementById('input')
        const value = field.value;
        field.value = '';
        this.setState({
            beingEdited: false,
            currentId: 0
        })
    }

    render() {
        return (
        <div className='mainContainer'>
            <Sidebar promptList={this.state.promptList} beingEdited={this.state.beingEdited} editValue={this.editValue} deleteVal={this.deleteVal}/>
            <Heading generatePrompt={this.generatePrompt} />
            <PromptContainer prompt={this.state.prompts} savePrompt={this.savePrompt} cancelThis={this.cancelThis}/>
        </div>
        )
    }
}

export default MainContainer;