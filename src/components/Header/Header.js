import React, { useState }from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderMenu, { Banner, Menu, NavLink } from './HeaderMenu';

function Header() {
  const [toggle, setToggle] = useState(false);
  const handleHamburger = () => {
      setToggle(!toggle);
  }
  return (
    <div className="app">
      <HeaderMenu handleHamburger={handleHamburger} toggle={toggle}/>
      <Menu toggle={toggle}>
        <NavLink to="/" label="ABOUT NBC" />
        <NavLink to="/" label="2011 EVENT" />
        <NavLink to="/" label="NORDIC ROASTER" />
        <NavLink to="/" label="RESULTS" />
        <NavLink to="/" label="LINKS" />
        <NavLink to="/" label="CONTACT" />
      </Menu >
      <Banner />
      <HeaderBottom />
    </div>
  );
}

export default Header;
