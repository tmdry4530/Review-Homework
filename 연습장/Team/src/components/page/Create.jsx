import React from "react";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <>
      <header>logo</header>
      <div className="container">
        <div className="create-content-container">
          title : <input type="text" />
          content :<textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="save-btn">
          <Link to={"/view"}>save</Link>
        </button>
        <button className="toMain-btn">
          <Link to={"/list"}>main</Link>
        </button>
      </div>
      <footer>copyright</footer>
    </>
  );
};

export default Create;
