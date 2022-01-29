import React from 'react';
import { useState } from 'react';
function FunctionState() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const decrease = () => {
        setCount((prevCount) => prevCount - 1);
    }
    return (
        <div>
            <h1>Function State</h1>
            <h1> {count} </h1>
            <button onClick={increase} >+</button>
            <button onClick={decrease} >-</button>
        </div>);
}

export default FunctionState;
