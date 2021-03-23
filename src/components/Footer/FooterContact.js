import React from "react";
import Socials from "../Socials/Socials";

function FooterContact() {
  return (
    <div className="footer__container">
      <div className="footer__title">
        <p>Contact</p>
      </div>
      <div>
        <span className="footer__special" >
        Nordic Barista Cup
        </span>
        <p className="footer__paragraph"><a href="https://goo.gl/maps/nbYi7hiEa6VTeTVf6">Amagertorv 13</a></p>
        <p className="footer__paragraph"><a href="https://goo.gl/maps/nbYi7hiEa6VTeTVf6">1160 Copenhagen K</a></p>
        <p className="footer__paragraph"> <a href="tel:+45 33 12 04 28">+45 33 12 04 28</a></p>
        <p className="footer__paragraph">CVR: 11427693</p>
        <p className="footer__paragraph">Email: <a href="mailto:bbrend@nordicbaristacup.com">bbrend@nordicbaristacup.com</a></p>
      </div>
      <div className="footer__socials">
      <Socials />
      </div>
    </div>
  );
}

export default FooterContact;
