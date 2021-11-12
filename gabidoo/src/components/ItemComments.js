import React from "react";
import zoli from "../assets/zoli.jpg";

function ItemComments() {
  return (
    <>
      <div className="comments-container">
        <img
          src={zoli}
          alt="zoli"
          style={{ borderRadius: "50%", margin: "10px 10px" }}
          className="img-fluid"
        />

        <div className="comments-container-quote">
          <p className="comments-text">
            Odlicna oxidna boja. Vrlo sam zadovoljan.
          </p>
          <div className="comments-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemComments;
