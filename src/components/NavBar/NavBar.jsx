import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className='imgToyToy' src='../img/logo.png' alt="Logo Toy Toy" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to={`categoria/dragonball`}>Dragon Ball</NavLink>
          </li>
          <li>
            <NavLink to={`categoria/southpark`}>South Park</NavLink>
          </li>
          <li>
            <NavLink to={`categoria/saintseiya`}>Saint Seiya</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
