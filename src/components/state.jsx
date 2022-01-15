//  state ? are used to manage the data of the component 
// State in class component :
// class with constructor :
class Counter extends Component {
    constructor(props) {
        super(props);
        // key this is used to specify the state inside the constructor
        this.state = {
            count: 0,
            price: 0,
            name: ""
        }
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

export default Counter ;
// bind this is used to bind the this keyword inside the constructor

// class without constructor :
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
  
 export default Count ;
// State in functional component :

// we manage the state inside the function using Hooks :
// useState(),useReducer(), useContext()

// HOOKS TYPES :

// Basic Hooks : useState(),useEffect(),useContext()
// Additional Hooks : useReducer(),useCallback(),useMemo(),useRef(),useImperativeHandle(),useLayoutEffect()
// Costum Hooks : are personalised hooks that we can create and use them inside our components
// we name them starting with usePrefix()===useCustomHook()


import React from 'react'
import useState from 'react'
function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [show , setShow] = useState(false);

    return (
        <div>
            <h1>{count} </h1>
            <button onClick={()=>{setCount(count+1)}} > click</button>
        </div>
    )
}

export default Counter

