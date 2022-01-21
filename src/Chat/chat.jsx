import { Component } from 'react';

class CHAT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
        };
    }

    handleValue = (e) => {
        this.setState({
            msg: e.target.value
        });
    }


    handlSubmit = (e) => {
        e.preventDefault();
        this.props.SendMsg(this.state.msg);
    }
    render() {
        return (
            <form onSubmit={this.handlSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={this.handleValue}
                    value={this.state.msg}
                />
                <input type="submit"
                    value="Send" />
                <h2> {this.props.chatMessage} </h2>

            </form>
        );
    }
}

export default CHAT;