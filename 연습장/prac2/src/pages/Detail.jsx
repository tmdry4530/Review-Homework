import React from "react";
import { Body, Header } from "../components/layout";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Detail = ({ num, name }) => {
  let tempItem = [
    { num: 10, name: "hat" },
    { num: 20, name: "pants" },
    { num: 30, name: "shirt" },
  ];
  const location = useLocation();
  console.log(location);

  const params = useParams;
  console.log(params);

  const [query, setQuery] = useSearchParams();
  console.log(query.get("num2"));
  return (
    <>
      <Header name={"상세 페이지"} />
      <div>{tempItem[params.id].num}</div>
      <div>{tempItem[params.id].name}</div>
      <Body path={"/"} pageName={"메인"} />
    </>
  );
};

export default Detail;
