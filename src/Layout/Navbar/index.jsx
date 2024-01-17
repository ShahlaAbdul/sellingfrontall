import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="header">
        <div className="header_left">
          <h1>Selling</h1>
        </div>
        <div className="header_right">
          <ul>
            <li><NavLink  className={"page"} to={"/"}>Home</NavLink></li>
            <li><NavLink className={"page"} to={"/add"}>AddPage</NavLink></li>
            <li><NavLink className={"page"} to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink className={"page"} to={"/basket"}>Basket</NavLink></li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar