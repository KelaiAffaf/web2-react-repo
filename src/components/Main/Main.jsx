import React from 'react'
import Styles from './Main.module.css'
function Main() {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <h1>React</h1>
                <p>A JavaScript library for building user interfaces</p>
            </div>
            <div className={Styles.details}>
                <button>Get Started</button>
                <a href="">Take the tutorial</a>
            </div>
        </div>
    )
}

export default Main
