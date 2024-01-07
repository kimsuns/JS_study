import { useState } from "react";

import './styles/HighLow.css'




function HighLow () {

  const [num1, setNum1] = useState(Math.floor(Math.random() * 9));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 9));
  const [result, setResult] = useState('');
  const [visible, setVisible] = useState(false);
  const [history, setHistory] = useState([]);
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);


  const reset = () => {
    setVisible(false);
    setResult('')
    setNum1(Math.floor(Math.random() * 9));
    setNum2(Math.floor(Math.random() * 9));

  }

  const upButton = () => {
    setVisible(false);
    if(num1 < num2){
      setResult('맞았습니다');
      setHistory([...history,'승리'])
      setVisible(true);
    } else {
      setResult('틀렸습니다');
      setVisible(true);
      setHistory([...history,'패배'])
    }
    
    setTimeout(reset, 3000);
  }
  
  const downButton = () => {
    if(num1 > num2){
      setVisible(false)
      setResult('맞았습니다');
      setHistory([...history,'승리'])
      setVisible(true)
    } else {
      setResult('틀렸습니다');
      setHistory([...history,'패배'])
      setVisible(true)
    }
    setTimeout(reset, 3000);
    
  }

  
  return (
    <div>
      <h2> 하이로우 게임 </h2>
      <div className="game">
        <div className="card">
          {num1}
        </div>
        <div className="card">
          {visible && num2}
        </div>
      </div>
      <div>
      {result}

      </div>
      <button onClick={upButton}>Up</button>
      <button onClick={downButton}>Down</button>
      <div>
        <h3>당신의 기록은 </h3>
        {history.join(',')}
        {/* <h3>승리 : {setWin(history.filter((i)=>{i==='승리'}).length)}</h3> */}
        {/* <h3>패배 : {setLose(history.filter((i)=>{i==='패배'}).length)}</h3> */}

        </div>
    </div>
  )
}

export default HighLow;