import React from "react";
import jupol from "../assets/jupol.png";
import jupolgold from "../assets/jupolgold.png";
import citro from "../assets/citro.png";

function TopDeal() {
  return (
    <div className="top-deal-container">
      <div className="top-deal-item">
        <img src={jupol} alt="topdeal" />
        <p>Jub Jupol 2L</p>
        <p>
          <strong>409,00</strong> din
        </p>
        <div className="top-deal-subitem">
          <button>Dodaj u korpu</button>
          <i className="fas fa-heart" style={{ fontSize: "1vw" }}></i>
        </div>
      </div>

      <div className="top-deal-item">
        <img src={jupolgold} alt="topdeal" />
        <p>Jub Jupol Gold 012000</p>
        <p>
          <strong>527,00</strong> din
        </p>
        <div className="top-deal-subitem">
          <button>Dodaj u korpu</button>
          <i className="fas fa-heart" style={{ fontSize: "1vw" }}></i>
        </div>
      </div>
      <div className="top-deal-item">
        <img src={citro} alt="topdeal" />
        <p>Jub Jupol Citro 021001</p>
        <p>
          <strong>800,00</strong> din
        </p>
        <div className="top-deal-subitem">
          <button>Dodaj u korpu</button>
          <i className="fas fa-heart" style={{ fontSize: "1vw" }}></i>
        </div>
      </div>
    </div>
  );
}

export default TopDeal;
