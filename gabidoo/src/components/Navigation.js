import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="subcategory-navigation">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/">Pocetna</Link>
        <p>&#62;</p>
        <Link>Boje,lakovi i razredjivaci</Link>
        <p>&#62;</p>
        <p>Boje</p>
      </div>
    </div>
  );
}

export default Navigation;
