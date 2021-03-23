import React, { useState, useRef } from "react";

function CardContent({ title, data, content }) {
  const btn = useRef();
  const [readMore, setReadMore] = useState(true);

  const toggle = readMore ? content.slice(0, 150) + "..." : content;

  const handleToggle = () => {
    setReadMore(!readMore);
  };

  const handleButtonLeave = () => {
    btn.current.style.transform = "scale(1.0)";
    btn.current.style.backgroundColor = "#2C83B0";
  };
  const handleButton = () => {
    btn.current.style.transform = "scale(1.1)";
    btn.current.style.backgroundColor = "#c0392b";
  };
  return (
    <div className="card__container">
      <div className="card__titleBox">
        <h1 className="card__title">{title}</h1>
        <span className="card__date">Posted: {data}</span>
      </div>
      <div>
        <p className="card__paragraph">{toggle}</p>
        <button
          className="card__btn"
          ref={btn}
          onClick={handleToggle}
          onMouseEnter={handleButton}
          onMouseLeave={handleButtonLeave}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default CardContent;
