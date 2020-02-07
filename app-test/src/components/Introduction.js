import React, { Component } from 'react';

export default class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hey there',
            userInput: ''
        }

        this.handleInput = this.handleInput.bind(this);
    }

 render() {
     return (
        <div>
            <input value={this.state.userInput} onChange={this.handleInput}/>
            <h1>{this.state.message}</h1>
        </div>
     );
 }
}