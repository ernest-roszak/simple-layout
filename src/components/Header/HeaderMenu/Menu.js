import React from 'react';

function Menu({ children, toggle }) {
  return (
    <nav className={"header header__navigation " + (toggle ? "navigation--active" : null)}>
      { children }
    </nav>
  );
}

export default Menu;
