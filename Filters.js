import React from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Filters({ filters }) {
  return (
    <div className="subcategory-filters">
      <Navigation />
      <div>
        <h1 style={{ fontWeight: "700" }}>Boje</h1>
      </div>
      <div className="filters">
        <div className="filters-header">
          <p>Filteri</p>
          <p>Resetuj</p>
        </div>

        <div className="filter-type-wrapper">
          <div className="filter-type-header">
            <h6 className="filter-type" onClick={showFilters}>
              Proizvodjac
            </h6>

            <FontAwesomeIcon className="arrow" icon={faChevronUp} />
          </div>
          <div className="checkbox-wrapper">
            {filters.map((filter) => {
              return (
                <div id={filter.id} className="subcategory-checkbox-container">
                  <input
                    type="checkbox"
                    id={filter.id}
                    name={filter.proizvodjac}
                  />
                  <div className="box">
                    <label htmlFor={filter.proizvodjac}>
                      {filter.proizvodjac}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  function showFilters() {
    var filtersBox = document.querySelector(".checkbox-wrapper");
    filtersBox.classList.toggle("checkbox-is-active");
    var arrow = document.querySelectorAll(".arrow");
    arrow.forEach((arrow) => {
      arrow.classList.toggle("arrow-is-active");
    });
  }
}

export default Filters;
