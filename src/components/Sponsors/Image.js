import React from 'react';

function Image({img, label, styles}) {
  return (
    <div>
      <img src={img} alt={label} style={styles} />
    </div>
  );
}

export default Image;
