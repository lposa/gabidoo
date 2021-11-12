import React from "react";
import CartButton from "./CartButton";

function ItemCard({ item }) {
  return (
    <div>
      <div className="item-card">
        <div>
          <img src={item.img} alt={item.name} />
        </div>
        <div>
          <p>{item.name}</p>
          <p>
            <strong>{item.price}</strong> din
          </p>

          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
