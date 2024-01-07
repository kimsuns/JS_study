import { useState } from "react";
import Rsp from "./Rsp";
import RspButton from "./RspButton";

import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";



function RspApp() {
  const rsp = ["rock", "scissor", "paper"];
  const randomRsp = rsp[Math.floor(Math.random() * rsp.length)];
  const [userRsp, setUserRsp] = useState("");
  const [comRsp, setComRsp] = useState("");
  const [result, setResult] = useState("");

  const WIN = {
    rock: 'scissor',
    scissor: 'paper',
    paper: 'rock',
  };

  const handleClickRsp = (value) => {
    setUserRsp(value);
    setComRsp(randomRsp);
    handleReset(value, comRsp);
  };
  const handleReset = () => {
    setUserRsp("");
  };

  // function result (user, com) {
  //   if(WIN[user] === com){
  //     return '승리'
  //   } else if (user === WIN[com]){
  //     return '패배'
  //   } else {
  //     return '무승부'
  //   }
  // }

 

  const rspImg = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
  };

  const userImg = rspImg[userRsp];
  const comImg = rspImg[comRsp];

  return (
   
    <div>
      <div>
        <h2>가위바위보 게임</h2>
      </div>
      <div>
        {userRsp}
        {comRsp}
        <button onClick={handleReset}>처음부터</button>
        <h2>
          당신 <img src={userImg} /> vs 상대 <img src={comImg} />
        </h2>
        {result(userRsp, comRsp)}

        <button
          onClick={() => {
            handleClickRsp("rock");
          }}
        >
          <img src={rockImg} />
        </button>
        <button
          onClick={() => {
            handleClickRsp("scissor");
          }}
        >
          <img src={scissorImg} />
        </button>
        <button
          onClick={() => {
            handleClickRsp("paper");
          }}
        >
          <img src={paperImg} />
        </button>
      </div>
    </div>
  );
}

export default RspApp;
