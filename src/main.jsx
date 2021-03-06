import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {store} from './Redux/Store'
import './index.css'

import Counter from './Redux/CounterUi'
import TodoApp from './Redux/Todo/TodoApp'
import Banque from './Banque/Banque'
import CofeeShop from './Cafee/CofeeShop'
import Ecommerce from './Commerce/Ecommerce'
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Ecommerce />
        </Provider>
    </React.StrictMode>
    , document.getElementById('root'))
