import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css"

export const Navbar = () =>{
  return (
    <div className="navbar">
      <div className="links">
        <h1>Knjižara "Atina"</h1>
        <Link to="/about">O nama</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/"> Knjige</Link>
        <Link to="/cart">
        <ShoppingCart size={35}/>
        </Link>
      </div>
    </div>
  );
};