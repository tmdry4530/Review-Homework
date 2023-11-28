import React from "react";

const Player = ({ name, select, result }) => {
  let temp = "";
  if (name === "user") {
    temp = result;
  } else {
    if (result === "draw") {
      temp = "draw";
    } else if (result === "win") {
      temp = "lose";
    } else {
      temp = "win";
    }
  }
  return (
    <div className="player">
      <div className="name">{name}</div>
      <img className="select-img" src={select && select.imgPath} alt="" />
      <div className="result">{result}</div>
    </div>
  );
};

export default Player;
