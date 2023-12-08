import React from "react";
import { Header, Body } from "../components/layout";
const Main = () => {
  return (
    <div>
      <>
        <Header name={"메인 페이지"} />
        <Body path={"/shop"} pageName={"상품"} login={false} />
        <Body path={"/login"} pageName={"로그인"} login={false} />
        <Body path={"/mypage"} pageName={"마이페이지"} login={false} />
      </>
    </div>
  );
};

export default Main;
