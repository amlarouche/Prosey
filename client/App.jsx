import React, { Component } from 'react';

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
            </div>
        )
    }
}

export default App;