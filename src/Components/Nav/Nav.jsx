import React from 'react'
import { Link } from 'react-router-dom' 
import './Nav.css'
function Nav() {
  return (
    <div className='nav'>
        <nav>
            <ul>
               
                <li><Link to='login'>Login</Link></li>
                <li><Link to='signup'>Signup</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav