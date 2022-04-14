import React, { useState } from 'react';
import CategoriesDetailed from '../components/CategoriesDetailed';

function CategoriesNavbar() {
  const [activeCategory, setActiveCategory] = useState('');
  return (
    <>
      <div className='categories navbar'>
        <ul id='categories-navbar' className='navbar-nav flex-row px-5'>
          <li
            onClick={() => {
              setActiveCategory('boje-lakovi');
            }}
            className='nav-item px-3'
            id={activeCategory === 'boje-lakovi' ? 'active-nav-item' : ''}>
            Boje za krecenje i podloga
          </li>
          <li
            onClick={() => {
              setActiveCategory('auto-boje');
            }}
            className='nav-item px-3'
            id={activeCategory === 'auto-boje' ? 'active-nav-item' : ''}>
            Boje, osnovne boje, lazure i gitevi
          </li>
          <li
            onClick={() => setActiveCategory('gradjevinski-radovi')}
            className='nav-item px-3'
            id={
              activeCategory === 'gradjevinski-radovi' ? 'active-nav-item' : ''
            }>
            Cetke, valjci, alati
          </li>
          <li
            onClick={() => setActiveCategory('pur-pena')}
            className='nav-item px-3'
            id={activeCategory === 'pur-pena' ? 'active-nav-item' : ''}>
            Tehnicka Hemija
          </li>
          <li
            onClick={() => setActiveCategory('demit-fasade')}
            className='nav-item px-3'
            id={activeCategory === 'demit-fasade' ? 'active-nav-item' : ''}>
            Gradjevinski radovi
          </li>
          <li
            onClick={() => setActiveCategory('masine')}
            className='nav-item px-3'
            id={activeCategory === 'masine' ? 'active-nav-item' : ''}>
            Masine i alati
          </li>
          <li
            onClick={() => setActiveCategory('metalna-galanterija')}
            className='nav-item px-3'
            id={
              activeCategory === 'metalna-galanterija' ? 'active-nav-item' : ''
            }>
            Metalna galanterija
          </li>
          <li
            onClick={() => setActiveCategory('elektro-materijal')}
            className='nav-item px-3'
            id={
              activeCategory === 'metalna-galanterija' ? 'active-nav-item' : ''
            }>
            Elektro Materijal
          </li>
          <li
            onClick={() => setActiveCategory('htz')}
            className='nav-item px-3'
            id={activeCategory === 'htz' ? 'active-nav-item' : ''}>
            HTZ Oprema
          </li>
          <li
            onClick={() => setActiveCategory('brusno-rezni')}
            className='nav-item px-3'
            id={activeCategory === 'obloge' ? 'active-nav-item' : ''}>
            Brusno rezni alat, smirgle
          </li>
          <li
            onClick={() => setActiveCategory('auto-industrijske-boje')}
            className='nav-item px-3'
            id={activeCategory === 'obloge' ? 'active-nav-item' : ''}>
            Auto i industrijske boje
          </li>
          <li
            onClick={() => setActiveCategory('sprejevi')}
            className='nav-item px-3'
            id={activeCategory === 'obloge' ? 'active-nav-item' : ''}>
            Sprejevi
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
