import { Component } from 'react';

class Count extends Component {

    state = {
        count: 0,
    }
    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                {/* setState is used to modify the state value */}
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }} >click</button>
            </div>
        );
    }
}

export default Count;