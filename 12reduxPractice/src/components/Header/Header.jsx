import React from "react";
import {NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <header>
        <div>
            <ul>
            <li>
            <NavLink to='' className=''>
                Home
            </NavLink>
            </li>
            <li>
            <NavLink to='/about' className=''>
                About
            </NavLink> 
            </li>
            </ul>           
        </div>
        </header>
    )
}