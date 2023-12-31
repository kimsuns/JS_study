import "./App.css";
import { useState } from "react";

import UserButton from "./UserButton";
import Result from "./Result";
import HandIcon from "./HandIcon";
import Choice from "./Choice";


// function comMODE() {
//   const rsp = ['바위', '가위', '보']
//   const comChoice = rsp[Math.ceil(Math.random() * rsp.length)];
//   return comChoice;
// }

function App() {
  const [meClick, setMeClick] = useState('');
  const [comClick, setComClick] = useState('');

  const handleClick = () => {
    setMeClick(meClick);
    setComClick(comClick);
  };


  return (
    <div className="App">

      <h1 id="title">가위바위보</h1>
      {meClick}
      <div>
        <Choice meChoice={meClick} />
        <Result meChoice={meClick} />
        <div className="icon">
          <UserButton meButton={setMeClick} />

        </div>
      </div>
    </div>
  );
}

export default App;
