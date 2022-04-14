import React from 'react';
import CartButton from './CartButton';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  return (
    <Link to='/item' style={{ textDecoration: 'none', color: 'black' }}>
      <div>
        <div className='item-card'>
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
    </Link>
  );
}

export default ItemCard;
