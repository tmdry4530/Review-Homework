import React from "react";
import { boom, flag } from "../image/mineGame";

const Cell = ({ isBomb, clicked, isFlag, onClick }) => {
  const gameBoard = `cell${clicked ? " clicked" : ""}`;
  return (
    <div className={gameBoard} onClick={onClick}>
      {clicked &&
        !isFlag &&
        (isBomb ? (
          <img src={boom} alt="Bomb" />
        ) : (
          <img src={flag} alt="Flag" />
        ))}
    </div>
  );
};

export default Cell;
