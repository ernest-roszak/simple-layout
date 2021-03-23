import React from "react";
import Socials from "../../Socials/Socials";
import Quotes from "./Quotes";

function HeaderBottom() {
  return (
    <div className="header__bottom">
      <Quotes />
      <Socials />
    </div>
  );
}
export default HeaderBottom;
