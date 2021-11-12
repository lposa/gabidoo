import React from "react";

function CartButton() {
  return (
    <div className="item-button-container">
      <button>Dodaj u korpu</button>
      <i className="fas fa-heart" style={{ fontSize: "1vw" }}></i>
    </div>
  );
}

export default CartButton;
