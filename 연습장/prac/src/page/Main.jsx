import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main Page
      <br />
      <Link to={"/rspgame"}>가위바위보</Link>
      <br />
      <Link to={"/minegame"}>지뢰찾기</Link>
    </div>
  );
};

export default Main;
