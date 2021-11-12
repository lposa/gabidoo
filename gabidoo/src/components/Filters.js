import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Filters({ filters }) {
  return (
    <div className="subcategory-filters">
      <Navigation />
      <div>
        <h1 style={{ fontWeight: "700" }}>Boje</h1>
      </div>
      <div className="filters">
        <div style={{ borderBottom: "1px solid gainsboro" }}>
          <h3>Filteri</h3>
        </div>
        <h6>Proizvodjac</h6>

        {filters.map((filter) => {
          return (
            <div id={filter.id} className="subcategory-checkbox-container">
              <input type="checkbox" id={filter.id} name={filter.proizvodjac} />
              <div className="box">
                <label htmlFor={filter.proizvodjac}>{filter.proizvodjac}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filters;
