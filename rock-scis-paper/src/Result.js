import { useState } from "react";

const Result = ({ meChoice }) => {

  const WINS = {
    바위: '가위',
    가위: '보',
    보: '바위',
  }

  const me = meChoice;
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