import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav(){
    return(
        <div className='navbar'>
            <div className='user-info'>
                <div className='img-container'>
                    Profile Img
                </div>
                Username
            </div>
            <div className='links'>
                <Link to='/dashboard'>
                    <button className='link'>Dashboard</button>
                </Link>
                <Link to='/new'>
                    <button className='link'>New Post</button>
                </Link>
            </div>
            <div className='logout'>
                <Link to='/'>
                    <button className='logout-btn'>Logout</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav