import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-between p-6 sticky top-0 z-10 bg-white">

      <div className="navbar-main ">

        <Link to={"/"}>
        <div >LOGO</div>
        </Link>
   
      <div className="nav-links ml-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/dietplan">Dietplan</NavLink>
          <NavLink to="/bmi">BMI</NavLink>
          <NavLink to="/bmr">BMR</NavLink>
          <NavLink to="/bodyfat">Body Fat</NavLink>

          
        </div>
      </div>

      <div>
      <Link to={"/login"}>
      <button className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button></Link>
      </div>
    </div>
  )
}

export default Header