import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <header>
                <div>
                    <img id="logo" src="logo.png" alt="no_img"></img>
                </div>
                <nav>
                    <ul type="none">
                        <li><NavLink className={(e)=>{return e.isActive?"select":""}} to='/'>HOME</NavLink></li>
                        <li><NavLink className={(e)=>{return e.isActive?"select":""}} to='/about'>ABOUT</NavLink></li>
                        <li><NavLink className={(e)=>{return e.isActive?"select":""}} to='/projects'>PROJECTS</NavLink></li>
                        <li><NavLink className={(e)=>{return e.isActive?"select":""}} to='/contact'>CONTACT</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav
