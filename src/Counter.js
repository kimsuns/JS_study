import React,{useState} from "react";

// state는 리액트의 기능이기 때문에 임포트를 해줘야함
// useState 상태를 사용하겠다

const Counter = () => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  const [count, setCount] = useState(0);  // 초기값은 0

  const onIncrease = () => {
    setCount(count +1);
  }

  const onDecrease = () => {
    setCount(count -1);
  }

  const [count2, setCount2] = useState(0);  // 0부터 시작

  const onIncrease2 = () => {
    setCount2(count2 +1);
  }

  const onDecrease2 = () => {
    setCount2(count2 -1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  )
}

export default Counter;