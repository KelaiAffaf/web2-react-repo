import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Pages/App'
import Counter from './Course/Counter'
import Parent from './Props-course/ParentComponent'
ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
    , document.getElementById('root'))
