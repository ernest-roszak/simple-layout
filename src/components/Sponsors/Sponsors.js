import React from "react";

import sponsorsData from "../../data/SponsorsData";
import { Image } from ".";

function Sponsors() {
  const styles = {
    width: 150,
    height: 'auto',
    padding: 10
  };
  return (
    <div className="sponsors">
      <h1 className="sponsors__title">Nordic Barista Cup Sponsors</h1>
      <div className="sponsors__box">
        {sponsorsData.map((el) => (
          <Image img={el.img} key={el.id} label={el.label} styles={styles}/>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
