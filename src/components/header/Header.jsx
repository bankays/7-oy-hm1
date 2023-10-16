import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-links">
          <div className="lft">
            <h2>Teachers Room</h2>
            <p>Home / Teachers</p>
          </div>

          <button className="exit">
            <img src="../Exit.png" alt="icon" />
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
