import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


export default function Home() {
    return(
        <>
        <p>Home</p> 
        <Link to='/about' className='home-to-about'>About</Link>
        </>
    )
}