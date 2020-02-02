import react, { Component } from 'react';

class Introduction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hey there'
        }
    }

 render() {
     return (
        <div>
            <h1>{this.state.message}</h1>
        </div>
     );
 }
}