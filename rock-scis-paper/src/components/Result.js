import { useState } from "react";

function Result(props) {
  const rsp = ["rock", "scissor", "paper"];
  const random = Math.floor(Math.random() * rsp.length);

  const user = props.userButton;
  const com = rsp[random];

  const WINS = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock",
  };

  function result(user, com) {
    if (WINS[user] === com) {
      return "승리";
    } else if (user === WINS[com]) {
      return "패배";
    } else {
      return "무승부";
    }
    
  }

  return (
    <div>
      <h3>당신의 선택은 {user}</h3>
      <h3>상대의 선택은 {com}</h3>
      <h3>결과는 {result(user, com)}</h3>
    </div>
  );
}
import HandIcon from "./HandIcon";

export default Result;

/*
const Result = ({ ourResult }) => {

  const WINS = {
    바위: '가위',
    가위: '보',
    보: '바위',
  }

  const me = ourResult.mine;
  // console.log(me);
  const other = '가위';
  // console.log(other);
  const result = getResult(me, other);
  // console.log(result);

  function getResult(me, other) {
    if (WINS[me] === other) return '승리';
    else if (me === WINS[other]) return '패배';
    else return '무승부';
  }

  return (
    <div>
      <h2> 이번 승부는 {result} </h2>
    </div>
  )
}

export default Result;

*/
