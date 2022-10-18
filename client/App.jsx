import React, { Component } from 'react';
import MainContainer from './components/MainContainer.jsx'

class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() {
        console.log("I mounted!")
    }
    render() {
        return (
            <div>
                <h1>Hello to you!</h1>
                <MainContainer />
            </div>
        )
    }
}

export default App;