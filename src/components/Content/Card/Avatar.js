import React from "react";

const styles = {
  width: 150,
  height: "auto",
};

function Avatar({ image }) {
  return (
    <div className="card__avatar">
      <img src={image} alt="Avatar" style={styles} />
    </div>
  );
}

export default Avatar;
