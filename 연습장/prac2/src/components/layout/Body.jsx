import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Body = ({ path, pageName, login }) => {
  const nav = useNavigate();
  const NavHandler = (_path) => {
    nav(_path);
  };
  return (
    <div>
      <Link to={path}>{pageName}페이지 이동</Link>
      <button onClick={() => NavHandler(path)}>{pageName} 페이지로 이동</button>
    </div>
  );
};

export default Body;
