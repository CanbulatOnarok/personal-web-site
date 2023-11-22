import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../Style/navi.scss'
import Logo from '../image/CO-logo.jpg'
import { BsGithub, BsInstagram } from "react-icons/bs";


const Navi = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <img src={Logo} alt="" />
          <div className="icon-area">
            <a href="https://github.com/CanbulatOnarok" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="https://www.instagram.com/can.onarok/?next=%2F" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>

          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <NavLink style={({ isActive }) => ({ color: isActive ? "grey" : "whitesmoke" })} to="home" >Home</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({ color: isActive ? "grey" : "whitesmoke" })} to="about">About</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({ color: isActive ? "grey" : "whitesmoke" })} to="skills">Skills</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({ color: isActive ? "grey" : "whitesmoke" })} to="contact">Contact</NavLink>
            </li>
          </ul>

        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navi