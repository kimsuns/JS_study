import { useState } from "react";
// import "../styles/Game.css";
import './styles/Dice.css'
import Dice from "./DIce";
import Board from "./Board";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function DiceApp() {
  const [userHistory, setUserHistory] = useState([]);
  const [comHistory, setComHistory] = useState([]);


  const handleDiceClick = () => {
    const nextUserNum = random(6);
    const nextComNum = random(6);
    setUserHistory([...userHistory, nextUserNum])
    setComHistory([...comHistory, nextComNum])
  };

  const handleReset = () => {
    setUserHistory([])
    setComHistory([])

  };

  return (
    <div>
      <div className="title">
        <h2>다이스 게임</h2>
      </div>
      <div className="set">
        <div className="game_content">

        <button onClick={handleDiceClick}>던지기</button>
        <button onClick={handleReset}>처음부터</button>

        <Board name="나" color="blue" gameHistory={userHistory}/>
        <Board name="상대" color="red" gameHistory={comHistory}/>
        </div>
      </div>
    </div>
  );
}

export default DiceApp;
