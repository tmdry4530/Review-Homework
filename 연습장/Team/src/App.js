import "./App.css";
import { List, Main, Create, View, Modify } from "./components/index";
import "./css/list.css";
import "./css/create.css";
import "./css/view.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view" element={<View />} />
        <Route path="/modify" element={<Modify />} />
      </Routes>
    </div>
  );
}

export default App;
