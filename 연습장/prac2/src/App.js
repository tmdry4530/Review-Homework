import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Shop, MyPage, Login, Detail } from "./pages/index";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const Redirect = () => {
    if (login) return <MyPage login={login} />;
    return <Navigate to={"/login"} />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mypage" element={<Redirect />} />
        <Route
          path="/login"
          element={<Login login={login} setLogin={setLogin} />}
        />
        <Route path="/detail/:id/:num/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
