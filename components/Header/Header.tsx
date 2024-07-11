import React from 'react'
import "./Header.css"
import Button from "../../components/Button/Button"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const location= useLocation()
  return (
    <header className='' id='main-header'>
        <div className="header-logo">
            <h1>ReactMentoring</h1>
        </div>
        <ul className="header__nav">
            <li className="header__nav-item">
                <Button activeLink={location.pathname === "/"} textOnly to="/">Our Mission</Button>
            </li>
            <li className="header__nav-item">
                <Button activeLink={location.pathname === "/sessions"} textOnly to="/sessions">Browse Sessions</Button>
            </li>
            <li className="header__nav-item">
                <Button>Upcoming Sessions</Button>
            </li>
        </ul>
    </header>
  )
}

export default Header