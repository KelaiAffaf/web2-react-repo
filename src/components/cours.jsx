
// type of react components : 
// (v<16)
// 1. stateless functional component (v<16)
// 2. class component (v<16)
// (v>=16)
// 1- stateful  functional component (v>=16) ==> Hooks
// 2- stateful class component (v>=16) ==> Class component are not often used
//  actual react version is : 17.0.2 == it uses functional components 
// first Syntaxe :
import React from 'react'
class Card extends React.Component { }
export default Card

// Second Syntaxe :
import { Component } from 'react'
class Card extends Component { }
export default Card

//  vscode extenstion for react class :  ccc / cccs 
class cours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    render() { // it returns JSX code
        return (
            <div>
                <div>  {/* {javascript} */}</div>
                <h1>hello</h1>
            </div>


        );
    }
}

export default cours;


//  functional component
// ES5 OR es6
function Cours () {
    return (
        <div>
            <div>  {/* {javascript} */}</div>
            <h1>hello</h1>
        </div>
    );
} export default Cours;


// es6
  export default Cours = () => {
    return (
        <div>
            <div>  {/* {javascript} */}</div>
            <h1>hello</h1>
        </div>
    );
}

//  vscode extention : rfce

// HOC : Higher Order Component => a function that takes a component and returns a 
// new component that renders the original component with some extra props.
//  we use Hoc to avoid writing the same code over and over again
App = Hoc(App);
// HOC.js

import React, {Component} from 'react';

export default function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <HocComponent></HocComponent>
                </div>

            );
        }
    } 
}

//  implemented Hoc logic
App = Hoc(App);
<App/>

