import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
    <ul className="navbar-nav">
        <li class="nav-item">
        <NavLink to="/" className={"nav-link"}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/movies" className={"nav-link"}>Movies</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/toDo" className={"nav-link"}>To-Do</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/about" className={"nav-link"}>About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/login" className={"nav-link"}>Login</NavLink>
        </li>
    </ul>
</nav>

  )
}

export default Navbar
