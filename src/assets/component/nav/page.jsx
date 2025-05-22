import React from 'react'
import './style.css';

function nav() {
  return (
    <div>
        <nav>
            <div className="logo">My logo</div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="" className='visit'>Visit us</a></li>    
            </ul>
        </nav>
    </div>
  )
}

export default nav
