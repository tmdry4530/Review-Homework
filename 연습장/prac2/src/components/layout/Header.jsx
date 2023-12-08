import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  font-size: 15px;
  width: 100%;
  height: 60px;
  color: blue;
`;

const Header = ({ name }) => {
  return <HeaderStyle>{name}</HeaderStyle>;
};

export default Header;
