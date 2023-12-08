import React, { useEffect, useState } from "react";
import Cell from "../components/Cell";

const MineGame = () => {
  const boardSize = 3;
  const mineCount = 2;
  const [board, setBoard] = useState([]);
  const [findFlag, setFindFlag] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setBoard([]);
    setFindFlag(0);
    setGameOver(false);
  };

  const resetBoard = () => {
    let newBoard = Array(boardSize * boardSize).fill({
      isBomb: false,
      clicked: false,
      isFlag: false,
    });
    let mineReplaced = 0;
    while (mineReplaced < mineCount) {
      let randomMine = Math.floor(Math.random() * newBoard.length);
      if (!newBoard[randomMine].isBomb) {
        newBoard[randomMine] = { ...newBoard[randomMine], isBomb: true };
        mineReplaced++;
      }
    }

    setBoard(newBoard);
  };

  useEffect(() => {
    resetBoard();
  }, []);

  const clickHandler = (index) => {
    if (gameOver) return;

    const newBoard = [...board];
    const cell = newBoard[index];

    if (cell.isBomb) {
      newBoard[index] = { ...cell, clicked: true };
      setBoard(newBoard);

      setTimeout(() => {
        setGameOver(true);
        alert("Game Over");
        resetGame();
        resetBoard();
      }, 100);
    } else {
      newBoard[index] = { ...cell, clicked: true, isFlagged: true };
      setFindFlag(findFlag + 1);
    }

    setBoard(newBoard);
  };

  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <Cell
          key={index}
          isBomb={cell.isBomb}
          clicked={cell.clicked}
          isFlagged={cell.isFlagged}
          onClick={() => clickHandler(index)}
        />
      ))}
    </div>
  );
};

export default MineGame;
