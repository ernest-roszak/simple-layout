import React from "react";
import { Hamburger, Search } from ".";

import Logo from "./Logo";

function HeaderMenu({handleHamburger, toggle}) {

  return (
    <div className="header">
      <Hamburger handleHamburger={handleHamburger} toggle={toggle} />
      <Logo />
      <Search />
    </div>
  );
}

export default HeaderMenu;
