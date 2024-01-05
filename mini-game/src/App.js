import "./styles/App.css";

import Rsp from "./game_rsp/Rsp";
import Dice from "./game_Dice/DIce";

function App() {
  return (
    <div className="App">
      <div className="game">
        <div>
          <Dice />
        </div>
        <div>
          <Rsp />
        </div>
      </div>
    </div>
  );
}

export default App;
