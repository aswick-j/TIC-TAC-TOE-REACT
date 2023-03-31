import React, { useEffect, useState } from "react";
import "./Board.css";

const Board = () => {
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("x");
  const [gameOver, setGameOver] = useState(false);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    // console.log(player, index);
    if (tiles[index] !== "") return;
    setTiles((tiles) =>
      tiles.map((item, i) => {
        return i === index ? player : item;
      })
    );
    setPlayer(player === "x" ? "o" : "x");
  };

  const handleWinCheck = () => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      console.log(a, b, c);
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setGameOver(true);
      }
    }

    if (gameOver === true) {
      alert(`${player} won the game`);
    }
  };

  useEffect(() => {
    handleWinCheck();
  }, [tiles]);

  return (
    <div className="__board-container">
      {tiles.map((item, index) => (
        <div
          key={index}
          className="__board-tiles"
          onClick={() => handleClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Board;
