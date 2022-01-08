import React from 'react'
import './Header.css'
import logo from '../../logo.svg'
function Header() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>React</p>
                    </div>
                <div className="links">
                    <a href="#">Docs</a>
                    <a href="#">Tutorial</a>
                    <a href="#">Blogs</a>
                    <a href="#">Community</a>
                </div>
                <div className="more">
                    <input type="text" name="" id="" placholder="Search" />
                    <a href="">v17.0.2</a>
                    <a href="">Github</a>
                </div>
            </nav>
        </div>
    )
}

export default Header
