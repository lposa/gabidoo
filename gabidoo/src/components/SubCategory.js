import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import diper from "../assets/diper.jpg";
import CategoriesNavbar from "./CategoriesNavbar";
import ItemCard from "./ItemCard";
import Filters from "./Filters";

function SubCategory() {
  const [filters, setFilters] = useState([
    { id: 1, proizvodjac: "Alcea" },
    { id: 2, proizvodjac: "Bartoline" },
    { id: 3, proizvodjac: "Belinka" },
    { id: 4, proizvodjac: "Beohemik" },
    { id: 5, proizvodjac: "Bosch" },
    { id: 6, proizvodjac: "Svjetlost" },
    { id: 7, proizvodjac: "Duga" },
    { id: 8, proizvodjac: "Dugine Boje" },
    { id: 9, proizvodjac: "Dupli Color" },
    { id: 10, proizvodjac: "Er Lac" },
    { id: 11, proizvodjac: "Evrojug" },
    { id: 12, proizvodjac: "Happy Color" },
  ]);

  const [items, setItems] = useState([
    {
      id: 0,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA LIMUN ZUTA 0.5",
      price: "100,00",
    },
    {
      id: 1,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA CIGLA CRVENA 0.5",
      price: "100,00",
    },
    {
      id: 2,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA OKER ZUTA 0.5",
      price: "100,00",
    },
    {
      id: 4,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA TAMO ZELENA 0.5",
      price: "100,00",
    },
    {
      id: 5,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA KAJSIJA 0.5",
      price: "100,00",
    },
    {
      id: 6,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA BRAON 0.5",
      price: "100,00",
    },
    {
      id: 7,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA CRNA 0.5",
      price: "100,00",
    },
    {
      id: 8,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA PLAVA 0.5",
      price: "100,00",
    },
    {
      id: 9,
      img: "images/dugineboje.jpg",
      name: "BOJA OXIDNA BELA 0.5",
      price: "100,00",
    },
  ]);

  const [subcategories, setSubcategories] = useState([
    {
      id: 1,
      subcategory: "Unutrasnje boje",
      count: 137,
      img: "images/diper.jpg",
    },
    {
      id: 2,
      subcategory: "Spoljasnje boje",
      count: 21,
      img: "images/spoljasne.jpg",
    },
    {
      id: 3,
      subcategory: "Boje za metal",
      count: 159,
      img: "images/bojezametal.jpg",
    },
    {
      id: 4,
      subcategory: "Boje za drvo",
      count: 181,
      img: "images/bojezadrvo.jpg",
    },
    {
      id: 5,
      subcategory: "Boje za bazene",
      count: 1,
      img: "images/bojezabazene.jpg",
    },
    {
      id: 6,
      subcategory: "Specijalne boje",
      count: 91,
      img: "images/dugineboje.jpg",
    },
    {
      id: 7,
      subcategory: "Akrilne boje",
      count: 9,
      img: "images/akrilneboje.jpg",
    },
    {
      id: 8,
      subcategory: "Poliuretanske boje",
      count: 15,
      img: "images/poliuretanskeboje.png",
    },
    {
      id: 9,
      subcategory: "Boje za beton",
      count: 44,
      img: "images/bojezabeton.png",
    },
    {
      id: 10,
      subcategory: "Podloge i osnovne boje",
      count: 42,
      img: "images/podloge.jpg",
    },
  ]);

  return (
    <div className="subcategory">
      <Navbar />
      <CategoriesNavbar />

      <div className="subcategory-container">
        <Filters filters={filters} />

        <div className="subcategory-items">
          <div className="subcategories">
            {subcategories.map((sub) => {
              return (
                <div className="subcategory-menu" id={sub.id}>
                  <img src={sub.img} alt={sub.subcategory} />
                  <p>
                    <strong>{sub.subcategory}</strong> ({sub.count})
                  </p>
                </div>
              );
            })}
          </div>
          <div className="items-sorting">
            <div className="items-sorting-row">
              <label>Prikazano 15 od 700</label>
            </div>
            <div className="items-sorting-row">
              <div
                style={{
                  display: "flex",
                  columnGap: "10px",
                  alignItems: "center",
                }}
              >
                <label>Sortiraj</label>
                <select>
                  <option value="name">Nazivu</option>
                  <option value="priceDesc">Ceni opadajuce</option>
                  <option defaultValue="selected" value="priceAsc">
                    Cene rastuce
                  </option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: "10px",
                  alignItems: "center",
                }}
              >
                <label>Po stranici</label>
                <select>
                  <option defaultValue="selected" value="15">
                    15
                  </option>
                  <option value="30">30</option>
                  <option value="99">99</option>
                </select>
              </div>
            </div>
          </div>
          <div className="items">
            {items.map((item) => {
              return <ItemCard id={item.id} item={item} />;
            })}
          </div>
        </div>

        <div class="promo-banner"></div>
      </div>

      <Footer />
    </div>
  );
}

export default SubCategory;
