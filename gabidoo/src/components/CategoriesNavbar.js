import React, { useState } from "react";
import CategoriesDetailed from "../components/CategoriesDetailed";

function CategoriesNavbar() {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <>
      <div className="categories navbar">
        <ul id="categories-navbar" className="navbar-nav flex-row px-5">
          <li
            onClick={() => {
              setActiveCategory("boje-lakovi");
            }}
            className="nav-item px-3"
            id={activeCategory === "boje-lakovi" ? "active-nav-item" : ""}
          >
            Boje,lakovi i razredjivaci
          </li>
          <li
            onClick={() => {
              setActiveCategory("auto-boje");
            }}
            className="nav-item px-3"
            id={activeCategory === "auto-boje" ? "active-nav-item" : ""}
          >
            Auto boje i sprejevi
          </li>
          <li
            onClick={() => setActiveCategory("gradjevinski-radovi")}
            className="nav-item px-3"
            id={
              activeCategory === "gradjevinski-radovi" ? "active-nav-item" : ""
            }
          >
            Gradjevinski radovi
          </li>
          <li
            onClick={() => setActiveCategory("pur-pena")}
            className="nav-item px-3"
            id={activeCategory === "pur-pena" ? "active-nav-item" : ""}
          >
            Pur pena, silikoni, lepkovi i zaptivne mase
          </li>
          <li
            onClick={() => setActiveCategory("demit-fasade")}
            className="nav-item px-3"
            id={activeCategory === "demit-fasade" ? "active-nav-item" : ""}
          >
            Demit fasade
          </li>
          <li
            onClick={() => setActiveCategory("metalna-galanterija")}
            className="nav-item px-3"
            id={
              activeCategory === "metalna-galanterija" ? "active-nav-item" : ""
            }
          >
            Metalna galanterija i elektro materijal
          </li>
          <li
            onClick={() => setActiveCategory("obloge")}
            className="nav-item px-3"
            id={activeCategory === "obloge" ? "active-nav-item" : ""}
          >
            Podne i zidne obloge
          </li>
          <li
            onClick={() => setActiveCategory("htz")}
            className="nav-item px-3"
            id={activeCategory === "htz" ? "active-nav-item" : ""}
          >
            HTZ Oprema
          </li>
          <li
            onClick={() => setActiveCategory("masine")}
            className="nav-item px-3"
            id={activeCategory === "masine" ? "active-nav-item" : ""}
          >
            Masine i alati
          </li>
          <li
            onClick={() => setActiveCategory("ostalo")}
            className="nav-item px-3"
            id={activeCategory === "ostalo" ? "active-nav-item" : ""}
          >
            Ostalo
          </li>
        </ul>
      </div>

      <CategoriesDetailed
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </>
  );
}

export default CategoriesNavbar;
