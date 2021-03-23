import React from "react";
import { Image } from "../Sponsors";
import footerData from '../../data/footerData'

function FooterCenter() {
  const styles = {
    width: 75,
    height: 'auto',
    padding: '5px 0'
  };
  return (
    <div className="footer__container">
      <div className="footer__title">
        <p>NBC Flickr Stream</p>
      </div>
      <div className="footer__box">
        {footerData.map((el) =>
        <Image label={el.label} img={el.img} key={el.id} styles={styles}/>
        )}
      </div>
    </div>
  );
}

export default FooterCenter;
