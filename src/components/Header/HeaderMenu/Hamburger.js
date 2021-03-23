import React from "react";

function Hamburger({handleHamburger, toggle}) {
    return (
        <button onClick={handleHamburger} className={ "hamburger "  + (toggle ? "hamburger--js" : null)}>
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>
    )
}
export default Hamburger