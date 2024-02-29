import { useState, useEffect } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [firstGo, setFirstGo] = useState("circle");
  const [winner, setWinner] = useState(null);

  let checkArray = cells.every((cell) => cell !== "");

  useEffect(() => {
    checkWinner();
  }, [cells]);

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombinations.forEach((combination) => {
      let crossWinner = combination.every((cell) => cells[cell] === "cross");
      let circleWinner = combination.every((cell) => cells[cell] === "circle");

      if (crossWinner) {
        setWinner("Winner is cross!");
        return;
      } else if (circleWinner) {
        setWinner("Winner is circle!");
        return;
      } else if (checkArray) {
        setWinner("Tie!");
      }
    });
  };

  const handleResetGame = () => {
    if (winner || checkArray) {
      let emptyArray = new Array(9).fill("");
      setCells(emptyArray);
      setWinner(null);
    }
  };

  return (
    <div className="app">
      <h1 className="title">X-O Game</h1>
      <div className="squareContainer">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              id={index}
              cell={cell}
              setCells={setCells}
              cells={cells}
              firstGo={firstGo}
              setFirstGo={setFirstGo}
              winner={winner}
            />
          );
        })}
      </div>
      <button onClick={handleResetGame}>Reset game</button>
      {winner && <h2>{winner}</h2>}
    </div>
  );
}

export default App;
