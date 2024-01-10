import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'


export default function Header() {

    return(
        <div className='header-container'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='' className={({isActive}) => `${isActive ? 'header-to-home': ''}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive}) => `${isActive ? 'header-to-home': ''}`}>About</NavLink>
                    </li>
                </ul>
            </nav>                
        </div>
    )
}