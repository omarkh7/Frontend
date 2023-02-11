import React from "react";
import NavBar from "./NavBar/NavBar";
import img1 from "../../assets/ahmadhalabi.png";
import "./Header.css";
import {  Link } from "react-router-dom";



function Header() {
  return (

    <header className="header1">
     <Link className="linka" to="/"Home ><img className="imglogo" src={img1}></img> </Link>
      <NavBar />
    </header>
  );
}

export default Header;
