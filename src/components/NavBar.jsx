import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import adn1 from '../assets/images/adn1.ico'
import  {links} from '../data'
import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'

function NavBar() {
    const [isNavShowing, setIsNavShowing]= useState(false);

  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='Logo'>
                <img src={adn1} alt="Logo"></img>
            </Link>
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                {
                    links.map(({name, path}, index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=>  isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <FaBars/>
                }
            </button>
        </div>
    </nav>
  )
}

export default NavBar