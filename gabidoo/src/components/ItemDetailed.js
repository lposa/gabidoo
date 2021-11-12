import React, { useState } from "react";
import Navigation from "./Navigation";
import Navbar from "./Navbar";
import CategoriesNavbar from "./CategoriesNavbar";
import Footer from "./Footer";
import { Carousel } from "react-responsive-carousel";
import boje from "../assets/dugineboje.jpg";
import CartButton from "./CartButton";
import ItemComments from "./ItemComments";

function ItemDetailed() {
  const [dostupnost, setDostupnost] = useState(true);

  const [activeTab, setActiveTab] = useState("opis");

  return (
    <div>
      <Navbar />
      <CategoriesNavbar />

      <div className="full-item-detailed">
        <div className="item-detailed">
          <Navigation />
          <div className="item-detailed-container">
            <div className="item-detailed-images">
              <Carousel
                showIndicators={false}
                showThumbs={true}
                thumbWidth={"50%"}
                dynamicHeight={false}
                width={"500px"}
                showStatus={false}
              >
                <div className="item-detailed-images-carousel">
                  <img id="template-img" src={boje} alt="boje" />
                </div>
              </Carousel>
            </div>
            <div className="item-detailed-description-container">
              <div className="item-detailed-description-head">
                <h1>DUGINE BOJE BOJA OXIDNA CIGLA CRVENA 0.5</h1>
                <p>Boja Oksidna, Namenjena je za bojenje gasenog kreca.</p>
              </div>
              <div className="item-detailed-description-status">
                <div className="status">
                  <p>
                    Dostupnost:
                    {dostupnost ? (
                      <p style={{ color: "green" }}>Na stanju</p>
                    ) : (
                      <p style={{ color: "red" }}>Nije na stanju</p>
                    )}
                  </p>
                  <p>Proizvodjac: DUGINE BOJE</p>
                  <p>Sifra: 8607000259647</p>
                </div>
                <div className="cart-helper">
                  <p>
                    <strong>100,00 din</strong>
                  </p>
                  <CartButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-detailed-tab-container">
          <div className="items-detailed-tab-buttons">
            <button
              onClick={() => setActiveTab("opis")}
              className={
                activeTab === "opis"
                  ? "tabs-button active"
                  : "tabs-button deactive"
              }
            >
              <p>Opis</p>
            </button>

            <button
              onClick={() => setActiveTab("specifikacija")}
              className={
                activeTab === "specifikacija"
                  ? "tabs-button active"
                  : "tabs-button deactive"
              }
            >
              <p>Specifikacija</p>
            </button>
            <button
              onClick={() => setActiveTab("deklaracija")}
              className={
                activeTab === "deklaracija"
                  ? "tabs-button active"
                  : "tabs-button deactive"
              }
            >
              <p>Deklaracija</p>
            </button>
            <button
              onClick={() => setActiveTab("komentari")}
              className={
                activeTab === "komentari"
                  ? "tabs-button active"
                  : "tabs-button deactive"
              }
            >
              <p>Komentari</p>
            </button>
          </div>

          <div className="items-detailed-tab-content">
            <div className={activeTab === "opis" ? "tab show opis" : "hidden"}>
              <h3>Opis proizvoda</h3>
              <p> Boja Oksidna, Namenjena je za bojenje gasenog kreca.</p>
            </div>
            <div
              className={
                activeTab === "specifikacija"
                  ? "tab show specifikacija"
                  : "hidden"
              }
            >
              <h3>Specifikacija</h3>
            </div>
            <div
              className={
                activeTab === "deklaracija" ? "tab show deklaracija" : "hidden"
              }
            >
              <h3>Deklaracija</h3>
            </div>
            <div
              className={
                activeTab === "komentari" ? "tab show komentari" : "hidden"
              }
            >
              <h3>Komentari</h3>
              <ItemComments />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemDetailed;
