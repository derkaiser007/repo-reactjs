import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'


export default function Header() {

    return(
        <div className='header-container'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='' className={({isActive}) => `${isActive ? '': ''}`}>Home</NavLink>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>                
        </div>
    )
}