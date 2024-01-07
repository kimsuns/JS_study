import { useState } from "react";
import "../styles/Game.css";
import Dice from "./DIce";


function Board({name, color, gameHistory}) {
  const num = gameHistory[gameHistory.length -1] || 1;
  const sum = gameHistory.reduce((a,b) => a+ b,0);

  return (
    <div>
      <div className="title">
        <h2>{name}</h2>
      </div>
      <div className="main">
        <div className="game_content">

        <h3>점수는 {sum}</h3>
        <Dice color={color} num={num} />
        </div>
      <div className="game_recode">
        기록
        {gameHistory.join(',')}
      </div>
      </div>
    </div>
  );
}

export default Board;
