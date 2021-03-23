import React from 'react';

import logoImg from './Logo.png';

function Logo() {
  return (
    <div>
      <img src={logoImg} alt="Logo" className="header__logo" />
    </div>
  );
}

export default Logo;
