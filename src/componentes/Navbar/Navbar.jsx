import React, { Fragment } from "react";
import "boxicons";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";







const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <p class="navbar-brand" href="#"></p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <NavLink to="/" className={'nav-link'}>Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/Nosotros" className={'nav-link'}>Quienes somos</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/Tienda" className={'nav-link'}>Tienda</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/Contacto" className={'nav-link'}>Contacto</NavLink>
                </li>
            </ul>  
            </div>
            <div>
            <CartWidget/>
            </div>
        </div>
    </nav>
  
  )
}

export default Navbar
