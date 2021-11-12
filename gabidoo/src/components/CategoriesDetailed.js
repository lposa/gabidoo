import React from "react";
import boje from "../assets/unutrasnjeboje.jpg";
import autolakovi from "../assets/autoboje.jpg";
import gitevi from "../assets/gitevi.png";
import kozmetika from "../assets/filteri.png";
import lepkovi from "../assets/lepkovi.jpg";
import smirgle from "../assets/smirgle.jpg";
import pistolji from "../assets/pistolji.jpeg";
import filterikomore from "../assets/filterikomore.png";
import sprejevi from "../assets/sprejevi.jpg";
import trake from "../assets/trake.jpg";
import lakovi from "../assets/lakovi.png";
import razredjivaci from "../assets/razredjivaci.jpg";
import alati from "../assets/cetke_za_farbanje.jpg";
import gitovi from "../assets/gitovi.jpg";

import { Link } from "react-router-dom";

function CategoriesDetailed({ activeCategory, setActiveCategory }) {
  return (
    <>
      <div
        className={
          activeCategory === "boje-lakovi"
            ? "categories-detailed-container"
            : "hidden-category"
        }
      >
        <i
          onClick={() => setActiveCategory("")}
          class="far fa-times-circle"
        ></i>
        <Link
          to="/subcategory"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="categories-detailed-item">
            <img src={boje} alt="boje" />
            <p>Boje</p>
          </div>
        </Link>
        <div className="categories-detailed-item">
          <img src={lakovi} alt="lakovi" />
          <p>Lakovi</p>
        </div>
        <div className="categories-detailed-item">
          <img src={razredjivaci} alt="razredjivaci" />
          <p>Razredjivaci</p>
        </div>
        <div className="categories-detailed-item">
          <img src={alati} alt="alati" />
          <p>Alati</p>
        </div>
        <div className="categories-detailed-item">
          <img src={gitovi} alt="gitovi" />
          <p>Gitovi za drvo i metal</p>
        </div>
      </div>

      <div
        className={
          activeCategory === "auto-boje"
            ? "categories-detailed-container"
            : "hidden-category"
        }
      >
        <i
          onClick={() => setActiveCategory("")}
          className="far fa-times-circle"
          style={{ zIndex: "9999999" }}
        ></i>
        <div className="categories-detailed-item">
          <img src={autolakovi} alt="boje" />
          <p>Auto Boje</p>
        </div>
        <div className="categories-detailed-item">
          <img src={trake} alt="lakovi" />
          <p>Zastitne trake, papir i najlon</p>
        </div>
        <div className="categories-detailed-item">
          <img src={gitevi} alt="razredjivaci" />
          <p>Gitevi i prajmeri</p>
        </div>
        <div className="categories-detailed-item">
          <img src={kozmetika} alt="alati" />
          <p>Auto kozmetika</p>
        </div>
        <div className="categories-detailed-item">
          <img src={lepkovi} alt="gitovi" />
          <p>Lepkovi i diht mase</p>
        </div>
        <div className="categories-detailed-item">
          <img src={smirgle} alt="gitovi" />
          <p>Smirgle</p>
        </div>
        <div className="categories-detailed-item">
          <img src={pistolji} alt="gitovi" />
          <p>Pistolji za farbanje</p>
        </div>
        <div className="categories-detailed-item">
          <img src={filterikomore} alt="gitovi" />
          <p>Filteri za komore</p>
        </div>
        <div className="categories-detailed-item">
          <img src={sprejevi} alt="gitovi" />
          <p>Sprejevi</p>
        </div>
      </div>
    </>
  );
}

export default CategoriesDetailed;
