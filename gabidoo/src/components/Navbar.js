import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gabilogo.png";

function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <nav className="navbar" style={{ width: "100%", fontSize: "1.2rem" }}>
        <Link to="/">
          <img
            id="logo"
            src={logo}
            alt="logo goes here"
            className="img-fluid ml-2 px-3"
          />
        </Link>

        <div className="search-form">
          <input className="search" placeholder="Pretraga proizvoda..."></input>

          <i class="fas fa-search"></i>
        </div>

        <div className="drop-container">
          <div className="drop-container">
            <button
              className="nav-link "
              style={{ border: "none", backgroundColor: "white" }}
              onClick={() => {
                setShowUserMenu(!showUserMenu);
              }}
            >
              <i class="fas fa-user-alt"></i>
            </button>

            <button
              className="nav-link "
              style={{ border: "none", backgroundColor: "white" }}
            >
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>

          {showUserMenu ? (
            <ul className="navbar-nav justify-content-end drop-menu">
              <li className="drop-item px-3 drop-item">
                <Link to="/login" className="drop-item-link">
                  Prijava
                </Link>
              </li>
              <li className="drop-item px-3 drop-item">
                <Link to="/profile" className="drop-item-link">
                  Profil
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
