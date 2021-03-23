import React from 'react';

import dataBanner from '../../data/dataBanner'

const styles = {
width: '100%',
};
function Banner() {
 const bannerImg = dataBanner[Math.floor(Math.random() * dataBanner.length)]
  return (
    <div>
      <img src={bannerImg.img} alt={bannerImg.label} style={styles} />
    </div>
  );
}

export default Banner;
