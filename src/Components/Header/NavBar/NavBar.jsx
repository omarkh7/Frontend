import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "./NavBar.css";
import {  Link } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <div className="toggle-icon" onClick={toggleMenu}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>

      <ul className="topbar-ul">
        <li>
          <a href="https://facebook.com">Facebook </a>
        </li>
        <li>
          <a href="https://linkedin.com">Linked In</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
        <li>
          <a href="https://hackerone.com">HackerOne</a>
        </li>
        <li>
          <a href="https://bugcrowd.com">BugCrowd</a>
        </li>
        <li>
          <a href="https://youtube.com">Youtube</a>
        </li>
        <li>
          <a href="https://instagram.com">Instagram</a>
        </li>
      </ul>

      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/biography"> Biography </Link>
        </li>
        <li>
          <Link to="/achievements"> Achievements </Link>
        </li>
        <li>
          <Link to="/acknowledgments"> Acknowledgments </Link>
        </li>
        <li>
          <Link to="/certification"> Certification </Link>
        </li>
        <li>
          <Link to="/highlights"> Highlghts </Link>
        </li>
        <li>
          <Link to="/writeups"> Writeups </Link>
        </li>
        <li>
          <Link to="/blogs"> Blogs </Link>
        </li>
        <li>
          <Link to="/contactus"> Contact </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
