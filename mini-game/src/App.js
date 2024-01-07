import "./styles/App.css";

import DiceApp from "./game_Dice/DiceApp";
import RspApp from "./game_rsp/RspApp";
import HighLow from "./game_HighLow/HighLowApp";
import CardApp from "./game_Card/CardApp";
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>home</Link> | <Link to='dice'>주사위 게임</Link>
      </nav>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/dice' element={<DiceApp />}/>


      </Routes>
      <div className="games">
        <div className="game">
          {/* <DiceApp /> */}
        </div>
        <div className="game">
          {/* <RspApp /> */}
        </div>
        <div>
          <HighLow />
        </div>
        <div>
          {/* <CardApp /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
