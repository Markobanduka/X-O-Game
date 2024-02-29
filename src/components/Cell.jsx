import React from "react";

function Cell({ id, cell, cells, setCells, firstGo, setFirstGo, winner }) {
  const handleGame = (event) => {
    let taken =
      event.target.firstChild.classList.contains("circle") ||
      event.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (firstGo === "circle") {
        event.target.firstChild.classList.add("circle");
        setFirstGo("cross");
        handleCellChange("circle");
      } else if (firstGo === "cross") {
        event.target.firstChild.classList.add("cross");
        setFirstGo("circle");
        handleCellChange("cross");
      }
    }
  };

  const handleCellChange = (classList) => {
    let updateArrayCell = cells.map((el, index) => {
      if (index === id) {
        return classList;
      } else {
        return el;
      }
    });
    setCells(updateArrayCell);
  };

  return (
    <div className="square" id={id} onClick={!winner ? handleGame : null}>
      <div className={cell} cla></div>
    </div>
  );
}

export default Cell;
