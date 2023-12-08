import React from "react";
import { Body, Header } from "../components/layout";
const Shop = () => {
  let tempItem = [
    { num: 10, name: "hat" },
    { num: 20, name: "pants" },
    { num: 30, name: "shirt" },
  ];
  return (
    <>
      <Header name={"상품"}></Header>
      <Body path={"/"} pageName={"메인"}></Body>
      {tempItem.map((i, index) => (
        <Body path={`/detail/${index}/1/1`} pageName={i.name} />
      ))}
    </>
  );
};

export default Shop;
