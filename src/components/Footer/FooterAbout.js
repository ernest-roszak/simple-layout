import React from "react";

function FooterAbout() {
  return (
    <div className="footer__container">
      <div className="footer__title">
        <p>About Nordic Barista Cup</p>
      </div>
      <div>
        <p className="footer__paragraph" style={{marginBottom: "20px"}}>The vision within the Nordic Barista Cup is:  </p>
        <span className="footer__special" >
          “To create an environment in which knowledge about coffee and its
          sphere can be obtained”
        </span>
        <p className="footer__paragraph" style={{marginTop: "20px", marginBottom:0}}>’...create an environment…’</p>
        <p className="footer__paragraph">
          Combined with personally absorption having the opportunity to see and
          experience countries, people, traditions etc. will always serve as a
          source of inspiration in our daily work. The organization behind the
          Nordic Barista Cup see it as its main purpose to be a part of creating
          this forum in which people can meet, bond and achieve further
          knowledge.
        </p>
      </div>
    </div>
  );
}

export default FooterAbout;
