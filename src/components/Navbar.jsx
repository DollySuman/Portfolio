import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='header'>
      <nav>
        <ul>
            <NavLink to="/home" className={(e)=>{return e.isActive?"link": "anchor"}} ><li>Home</li></NavLink>
            <NavLink to="/about" className={(e)=>{return e.isActive?"link": "anchor"}} ><li>About</li></NavLink>
            <NavLink to="/contact" className={(e)=>{return e.isActive?"link": "anchor"}} ><li>Contact</li></NavLink>
          <a className='git' href="https://github.com/DollySuman" target='_blank'>Github</a>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
