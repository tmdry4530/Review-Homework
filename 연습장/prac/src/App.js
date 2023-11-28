import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import RSPGame from "./page/RSPGame";
import MineGame from "./page/MineGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rspgame" element={<RSPGame />} />
        <Route path="/minegame" element={<MineGame />} />
      </Routes>
    </div>
  );
}

export default App;
