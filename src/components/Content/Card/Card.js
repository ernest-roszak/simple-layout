import React from "react";
import { Avatar, CardContent } from ".";

function Card({title, data, content, image}) {
  return (
    <div className="card">
      <Avatar image={image} />
      <CardContent title={title} data={data} content={content}/>
    </div>
  );
}

export default Card;
