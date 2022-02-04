import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './Exo-1'
// import Counter from './Course/Counter'
// import Parent from './Props-course/ParentComponent'
// import Chat from './Exo-2'
// import Effect from './Hooks/Effect'
// import FetchData from './Hooks/FetchData'
// import AxiosData from './Hooks/AxiosData'
// import AppState from './AppState'
import Counter from './Hooks/Reducers/Counter'
ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
    , document.getElementById('root'))
