import React from 'react';
import boje from '../assets/unutrasnjeboje.jpg';
import autolakovi from '../assets/autoboje.jpg';
import gitevi from '../assets/gitevi.png';
import kozmetika from '../assets/filteri.png';
import lepkovi from '../assets/lepkovi.jpg';
import smirgle from '../assets/smirgle.jpg';
import pistolji from '../assets/pistolji.jpeg';
import filterikomore from '../assets/filterikomore.png';
import sprejevi from '../assets/sprejevi.jpg';
import trake from '../assets/trake.jpg';
import lakovi from '../assets/lakovi.png';
import razredjivaci from '../assets/razredjivaci.jpg';
import alati from '../assets/cetke_za_farbanje.jpg';
import gitovi from '../assets/gitovi.jpg';

import { Link } from 'react-router-dom';

function CategoriesDetailed({ activeCategory, setActiveCategory }) {
  return (
    <>
      <div
        className={
          activeCategory === 'boje-lakovi'
            ? 'categories-detailed-container'
            : 'hidden-category'
        }>
        <i
          onClick={() => setActiveCategory('')}
          class='far fa-times-circle'></i>

        <div className='categories-detailed-item'>
          <Link
            to='/subcategory'
            style={{ textDecoration: 'none', color: 'black' }}>
            <h4>Spoljne</h4>
          </Link>
          <div className='categories-detailed-subitem-container'>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
          </div>
        </div>

        <div className='categories-detailed-item'>
          <h4>Unutrašnje</h4>
          <div className='categories-detailed-subitem-container'>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
          </div>
        </div>

        <div className='categories-detailed-img-container'>
          <img className='categories-detailed-img' src={boje} />
          <img
            className='categories-detailed-img'
            src={'https://www.gabi-boje.rs/images/megamenu-1.jpg'}
          />
        </div>
      </div>

      <div
        className={
          activeCategory === 'auto-boje'
            ? 'categories-detailed-container'
            : 'hidden-category'
        }>
        <i
          onClick={() => setActiveCategory('')}
          className='far fa-times-circle'
          style={{ zIndex: '9999999' }}></i>
        <div className='categories-detailed-item'>
          <Link
            to='/subcategory'
            style={{ textDecoration: 'none', color: 'black' }}>
            <h4>Drvo</h4>
          </Link>
          <div className='categories-detailed-subitem-container'>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
          </div>
        </div>

        <div className='categories-detailed-item'>
          <h4>Metal</h4>
          <div className='categories-detailed-subitem-container'>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
          </div>
        </div>

        <div className='categories-detailed-item'>
          <h4>Beton i Malter</h4>
          <div className='categories-detailed-subitem-container'>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
          </div>
        </div>

        <div className='categories-detailed-img-container'>
          <img
            className='categories-detailed-img'
            src={'https://www.gabi-boje.rs/images/auto-boje-i-sprejevi.jpg'}
          />
        </div>
      </div>
    </>
  );
}

export default CategoriesDetailed;
