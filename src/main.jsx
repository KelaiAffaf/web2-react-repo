import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {store} from './Redux/Store'
import './index.css'

import Counter from './Redux/CounterUi'
import TodoApp from './Redux/Todo/TodoApp'
import Banque from './Exo/Banque'
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Banque />
        </Provider>
    </React.StrictMode>
    , document.getElementById('root'))
