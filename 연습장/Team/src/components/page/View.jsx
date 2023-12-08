import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../organisms/DeleteModal";

const View = () => {
  return (
    <>
      <header>logo</header>
      <div className="container">
        <div className="view-content-container">
          <p>title : sample </p>
          <p>content : sample </p>
        </div>
        <div className="view-button-container">
          <button>delete</button>
          <button>
            <Link to={"/modify"}>modify</Link>
          </button>
          <button className="toMain-btn">
            <Link to={"/list"}>main</Link>
          </button>
        </div>
      </div>
      <footer>copyright</footer>
    </>
  );
};

export default View;
