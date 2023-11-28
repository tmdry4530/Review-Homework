import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paper, rock, scissors } from "../image/rockScissorsPaper";
import Player from "../components/Player";

const RSPGame = () => {
  const [playerSelect, setPlayerSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState(null);
  const [playTime, setPlayTime] = useState(0);
  const [playerMoney, setPlayerMoney] = useState(10000);
  const [comMoney, setComMoney] = useState(10000);
  const [betMoney, setBetMoney] = useState(0);

  const resetGame = () => {
    setPlayerSelect(null);
    setComSelect(null);
    setResult(null);
    setPlayTime(0);
    setPlayerMoney(10000);
    setComMoney(10000);
    setBetMoney(0);
  };

  const select = {
    scissors: {
      name: "scissors",
      imgPath: scissors,
    },
    rock: {
      name: "rock",
      imgPath: rock,
    },
    paper: {
      name: "paper",
      imgPath: paper,
    },
  };

  const comSelectHandler = () => {
    let arr = Object.keys(select);
    console.log(arr);
    let comRandom = Math.floor(Math.random() * 3);
    setComSelect(select[arr[comRandom]]);
  };

  const playerSelectHandler = (_select) => {
    setPlayerSelect(select[_select]);
    if (betMoney === 0) {
      alert("bet plz");
      return;
    }
    if (playTime < 5) {
      setPlayTime(playTime + 1);
      setTimeout(() => {
        comSelectHandler();
      }, 1000);
    } else {
      alert("game over");
      resetGame();
    }
  };

  const resultHandler = () => {
    if (playerSelect.name === comSelect.name) {
      setResult("draw");
    } else if (playerSelect.name === "scissors") {
      let result = comSelect.name === "paper" ? "win" : "lose";
      setResult(result);
    } else if (playerSelect.name === "rock") {
      let result = comSelect.name === "scissors" ? "win" : "lose";
      setResult(result);
    } else if (playerSelect.name === "paper") {
      let result = comSelect.name === "rock" ? "win" : "lose";
      setResult(result);
    }
  };

  const bettingMoneyHandler = (amount) => {
    if (playerMoney >= amount) {
      setBetMoney(amount);
      setPlayerMoney(playerMoney - amount);
    } else {
      alert("no money");
    }
  };

  const updateMoneyAfterGame = () => {
    if (result === "win") {
      setPlayerMoney(playerMoney + betMoney * 2);
      setComMoney(comMoney - betMoney * 2);
    } else if (result === "lose") {
      setComMoney(comMoney + betMoney * 2);
      setPlayerMoney(playerMoney - betMoney * 2);
    }
    setBetMoney(0);
  };

  useEffect(() => {
    if (comSelect === null) return;
    resultHandler();
  }, [comSelect]);

  useEffect(() => {
    if (result === null) return;
    updateMoneyAfterGame();
  }, [result]);

  useEffect(() => {
    if (playerMoney < 0) {
      alert("게임 오버!");
      resetGame();
    }
  }, [playerMoney]);

  return (
    <div className="border">
      <Player name={"user"} select={playerSelect} result={result} />
      <div>{playerMoney}</div>
      <Player name={"computer"} select={comSelect} />
      <div>{comMoney}</div>
      <div>
        <button
          onClick={() => {
            playerSelectHandler("scissors");
          }}
        >
          scissors
        </button>
        <button
          onClick={() => {
            playerSelectHandler("rock");
          }}
        >
          rock
        </button>
        <button
          onClick={() => {
            playerSelectHandler("paper");
          }}
        >
          paper
        </button>
        <div className="PlayTime">{playTime}</div>
        <div>{betMoney}</div>
        <div>
          <button
            onClick={() => {
              bettingMoneyHandler(1000);
            }}
          >
            1000
          </button>
          <button
            onClick={() => {
              bettingMoneyHandler(2000);
            }}
          >
            2000
          </button>
          <button
            onClick={() => {
              bettingMoneyHandler(3000);
            }}
          >
            3000
          </button>
        </div>
      </div>
      <Link to={"/"}>to Main</Link>
    </div>
  );
};

export default RSPGame;
