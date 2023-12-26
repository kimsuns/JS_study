
import React from 'react';    // React 파일 불러오기
import './App.css';

import MyHeader from './MyHeader';


function App() {
  let name = "김선영";

  // css 파일을 사용하지 않고 inline 스타일 사용 가능
  const style = {   
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "yellow",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader/>
      <h2 style={style.h2}>안녕 리액트 {name} </h2>
      {/* {} 안에 숫자나 문자 넣어도 가능 */}
      {/* 단, flase나 배열같은거 넣으면 렌더 안됨 */}
      {/* jsx의 중괄호 안에는 어떤 값을 포함할 수 있지만 숫자나 문자열만 포함할 수 있다 */}

      <b style={style.bold_text} id="bold_text">
      {number}는 {number % 2 === 0 ? '짝수' : '홀수'}
      {/* jsx는 렌더링할 떄 조건에 따라 다른 요소 렌더링 가능 */}
      
      </b>
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
