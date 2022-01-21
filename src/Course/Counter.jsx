import { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0

        }
        //  this.show = this.handlClick.bind(this);
    }



    handlIncrement = () => {
        this.setState({ count: this.state.count + 1 }); this.setState({ name: "Afaf" })
    }
    handlDecrement = () => {
        this.setState({ count: this.state.count - 1 }); this.setState({ name: "Afaf" })
    }
    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                <button onClick={this.handlIncrement}>+</button>
                <button onClick={this.handlDecrement}>-</button>
            </div>
        );
    }
}

export default Counter;