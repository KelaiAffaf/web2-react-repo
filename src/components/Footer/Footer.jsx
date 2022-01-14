// type of react components : 
// (v<16)
// 1. stateless functional component (v<16)
// 2. class component (v<16)
// (v>=16)
// 1- stateful  functional component (v>=16) ==> Hooks
// 2- stateful class component (v>=16) ==> Class component are not often used
//  actual react version is : 17.0.2 == it uses functional components 

// Create Footer Class component

import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props)
    //    state management
    }
    render(){ // it returns JSX code
        return(
            <div>
                <p>Footer</p>
            </div>
        )
    }

}
export default Footer