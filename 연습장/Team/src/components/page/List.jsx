import React from "react";
import { Link } from "react-router-dom";
import CreateModal from "../organisms/CreateModal";

const List = () => {
  return (
    <>
      <header>logo</header>
      <div class="container">
        <div class="board-layout">
          <div className="board-container">
            <div class="writer">chamdom</div>
            <div class="created-at">2023-01-01</div>
            <div class="content">meme</div>
            <div class="title">Sample Title</div>
            <div class="views">100</div>
            <div class="likes">50</div>
          </div>
          <div className="board-container">
            <div class="writer">chamdom</div>
            <div class="created-at">2023-01-01</div>
            <div class="content">meme</div>
            <div class="title">Sample Title</div>
            <div class="views">100</div>
            <div class="likes">50</div>
          </div>
        </div>

        <button className="board-write-btn">
          <Link to={"/create"}>작성</Link>
        </button>
      </div>
      <footer>copyright</footer>
    </>
  );
};

export default List;
