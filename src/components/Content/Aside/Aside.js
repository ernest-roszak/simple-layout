import React from "react";
import { News } from ".";
import NewsData from "../../../data/NewsData"

function Aside() {
  return (
<aside className="aside">
    {NewsData.map((el) =>
    <News title={el.title} content={el.content} link={el.link} linkTitle={el.linkTitle} key={el.id}/>
    )}
</aside>
  );
}

export default Aside;
