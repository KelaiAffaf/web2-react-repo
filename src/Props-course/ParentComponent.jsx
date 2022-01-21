import { Component } from 'react';
import ChildComponent from './ChildComponent';
import './Props.css'
class ParentComponent extends Component {


    handleAge =()=>{
        return Math.floor(Math.random() * 10)
    }
    render() {
        return (
            <div className="container">
                <ChildComponent name="First Child" Age={this.handleAge()} />
                <ChildComponent name="Second Child" Age={11} />
                <ChildComponent />
                <ChildComponent />
            </div>
        );
    }  
       
}
export default ParentComponent;