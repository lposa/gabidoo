import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-item" id="footer-item-border">
          <h3>Kontaktirajte nas</h3>
          <p style={{ fontSize: "14px", textAlign: "center" }}>
            Gabi boje nudi širok spektar proizvoda, od proizvoda namenjenih
            farbanju i lakiranju, preko alata do šrafovske robe. Kontaktirajte
            nas i saznajte više o proizvodima il nam postavite pitanje. Naši
            stručnjaci spremni su da uvek izađu u susret.
          </p>
          <div className="footer-icon-container">
            <i className="fas fa-globe"></i>
            <p>Hunjadi Janosa 33, 23000 Zrenjanin</p>
          </div>
          <div className="footer-icon-container">
            <i className="fas fa-envelope"></i>
            <p>info@gabi-boje.rs</p>
          </div>
          <div className="footer-icon-container">
            <i className="fas fa-mobile-alt"></i>
            <p>+381 (0) 23 527 184</p>
          </div>
          <div className="footer-icon-container">
            <i className="far fa-clock"></i>
            <p>Pon - Pet 07:00 - 19:00 Subota 07:00 - 14:00</p>
          </div>
        </div>

        <div
          className="footer-container-item footer-item-text"
          id="footer-item-border"
        >
          <h3>Informacije</h3>
          <a>O nama</a>
          <a>Gde se nalazimo</a>
          <a>Politika privatnosti</a>
          <a> Ugovor o kupovini</a>
          <a>Najcesca pitanja</a>
          <a>Uslovi koriscenja</a>
          <i
            className="fab fa-facebook-square"
            style={{ fontSize: "24px" }}
          ></i>
        </div>

        <div className="footer-container-item footer-item-text">
          <h3>Kupovina</h3>
          <a>Pracenje porudzbine</a>
          <a>Dostava robe</a>
          <a>Kako poruciti</a>
          <a>Reklamacije</a>
          <a>Nacini placanja</a>
          <img src="images/boschlogo.jpg" alt="boschlogo" id="boschlogo" />
        </div>
      </div>

      <div className="footer-signature">
        <p>
          DEVELOPED BY <strong>POX DEVELOPMENT</strong>
        </p>
      </div>
    </>
  );
}

export default Footer;
