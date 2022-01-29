// useEffect ? we use it to add a side effect to a component 
// what is a side effect ?
// in js function , we have input and output, but wut if I wanted to add a side effect to a component ? 
// Life cycle in react component ?

// setTimeout(() => {
//     console.log('Hello');
// }, 3000)    // setTimeout is a side effect))


import React from 'react';
import { useEffect, useState } from 'react';
function Effect() {
  
    // [] means we are not passing any argument to useEffect

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Hello from use Effect ');
        // useCases :
        // 1- when we want to fetch data 
        // 2- interact with backend server
        // 3- when we want to prevent some behaviours 
    }, [count])
    const increase = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const decrease = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return <div>
        <h1>Hello use Effect</h1>
        <div>
            <h1> {count} </h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease} >-</button>
        </div>
    </div>;
}

export default Effect;
