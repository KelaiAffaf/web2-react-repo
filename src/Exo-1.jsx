import React from 'react';
import Chat from './Chat/chat'
import { Component } from 'react';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message1: '',
            message2: '',
        }
    }

    render() {
        return <div>
            <Chat
                SendMsg={(msg) => { this.setState({ message1: msg }) }}
                chatMessage={this.state.message2}

            />

            <Chat
                SendMsg={(msg) => { this.setState({ message2: msg }) }}
                chatMessage={this.state.message1}
            />
        </div>;
    }
}

export default App;
