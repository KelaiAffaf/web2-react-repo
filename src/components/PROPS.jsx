// props in jsx 
// Props is short for properties and they are used to pass data between React 
// components. React’s data flow between components is uni-directional
//  (from parent to child only).
import { Component } from 'react';
class ParentComponent extends Component {
    render() {
        return (
            <>
                <ChildComponent name="First Child" age={23} />
                <ChildComponent name="Second Child" age={11} />
                <ChildComponent />
                <ChildComponent />
            </>
        );
    }  
       
}
export default ParentComponent;

const ChildComponent = ({age,name}) => {
    // destructuring 
    return (
        <div>
            <p>{age}</p>;
            <p>{name}</p>

        </div>
    )

};

class classA extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1> {this.props.name} </h1>
                <h1> {this.props.age} </h1>
            </div>
         );
    }
}

// default props 
// default props are used to set default values for props.

classA.defaultProps = {
    name: "Afaf",
    age: 11
}

// props validation 
// props validation is used to check if the props are valid or not.
//  props types : string , number , boolean , object , array , func , any
//  we use props-types package to check the props type
//  npm install --save prop-types
import PropTypes from 'prop-types';
classA.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}
 
export default classA;



