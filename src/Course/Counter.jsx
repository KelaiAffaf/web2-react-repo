import {Component} from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
            
         }
         this.show = this.show.bind(this);
    }
   


    show = () => {
        this.setState({count : this.state.count+1}); this.setState({ name: "Afaf" })
      }
    render() { 
        return (
            <div>
                <h1> {this.state.count} </h1>
                <h1> {this.state.name} </h1>
                <button onClick={this.show} >click</button>
            </div>
          );
    }
}
 
export default Counter ;