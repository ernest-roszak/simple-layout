import React from "react";

import search from "../../../img/search.svg";

function Search() {
    return (
        <div className="header__searchBox">
            <input id="search" className="header__search" placeholder="search..."></input>
            <button className="header__search--ico"><img src={search} alt="search"/></button>
        </div>
    )
}
export default Search