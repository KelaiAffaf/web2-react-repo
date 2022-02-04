// use reducer hook : useReducer  is user to manage state in react
// const [state,dispatch]=useReducer(initialState,reducer)
// reducer :it's a function that contains the logic 
// dispatch : it's a method that dispatch the action to the reducer


import React from 'react';
import { useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count: 0 }
        default:
            return state

    }

}
function Counter() {

    const [state, dispatch] = useReducer(reducer,initialState);
    return <div>
        <h1>{state.count} </h1>
        <button onClick={() => { dispatch({ type: "increment" }) }} >+</button>
        <button onClick={() => { dispatch({ type: "decrement" }) }} >-</button>
        <button onClick={() => { dispatch({ type: "reset" }) }} >Reset</button>
    </div>;
}

export default Counter;
