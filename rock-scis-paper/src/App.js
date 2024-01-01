import "./App.css";
import { useState } from "react";

import UserButton from "./components/UserButton";
import Result from "./components/Result";
import HandIcon from "./components/HandIcon";
import Choice from "./components/Choice";


function comMODE() {
  const rsp = ['바위', '가위', '보']
  const comChoice = rsp[Math.ceil(Math.random() * rsp.length)];
  return comChoice;
}
// 유틸 폴더에 넣어서 쓰기 

// // bind(this)
// this.setState(){
//   mode:'comMode',
// }
function App() {
  const [meClick, setMeClick] = useState('');
  const [comClick, setComClick] = useState('');


  // 값을 여러개 전달하고 싶으면 변수에 객체나 배열을 담아서 전달
  // 동작을 여러개 전달하고 싶으면 함수로


  return (
    <div className="App">

      <h1 id="title">가위바위보</h1>
      {meClick}
      <div>
        <Choice ChoiceContatiner={{ me: meClick, com: comClick }} />
        <Result ourResult={{ mine: meClick, com: comClick }} />
        <div className="icon">
          <UserButton meButton={setMeClick} />

        </div>
      </div>
    </div>
  );
}

export default App;
