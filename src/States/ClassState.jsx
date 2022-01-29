import {Component} from 'react';

class ClassState extends Component {
    constructor(props) {
        super(props); // we need to call super() in order to use this.props
        this.state = { 
            count: 0,
            name: '',
         };
    }

    Increment = () => {
        this.setState({count: this.state.count + 1})
    }
    Decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                <button  onClick={this.Increment} >+</button>
                <button onClick={this.Decrement} >-</button>
            </div>
        );
    }
}

export default ClassState;