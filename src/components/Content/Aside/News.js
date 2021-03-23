import React from "react";

function News({ title, link, linkTitle, content}) {
  return (
<div className="news">
<h1 className="news__title">{title}</h1>
<p className="news__paragraph">{content}</p>
<span className="news__paragraph news__paragraph--link" ><a href={link}>{linkTitle}</a></span>
</div>
  );
}

export default News;
