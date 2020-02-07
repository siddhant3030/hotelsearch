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

    handleInput = (e) => {
        const { value } = e.target;
        console.log("value:", value )
        this.setState({ userInput: value })
     }

 render() {
     return (
        <div>
            <input value={this.state.userInput} onChange={this.handleInput}/>
            <h1>{this.state.userInput}</h1>
        </div>
     );
 }
}