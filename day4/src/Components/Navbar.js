import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const cart = useSelector(state=>state.cartReducer.cart);

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
        <li class="nav-item">
          <NavLink to="/cart" className={"nav-link"}>Cart<span>{cart.length}</span></NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/counter" className={"nav-link"}>Counter</NavLink>
        </li>
    </ul>
</nav>

  )
}

export default Navbar
