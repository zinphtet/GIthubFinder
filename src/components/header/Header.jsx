import React from 'react'
import './Header.css'
import { FaGithub } from "react-icons/fa";
import {Link ,useNavigae} from 'react-router-dom'
function Header() {
  return (
    <div className='header-container'>
          <h2><FaGithub/> GitHub Finder</h2>
          <div className='nav-bar'>
            <Link to='/'> <h5>HOME</h5></Link>   
            <Link to='/about'> <h5>About</h5></Link>   
                
          </div>
    </div>
  )
}

export default Header