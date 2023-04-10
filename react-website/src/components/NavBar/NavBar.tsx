import React, { FC } from "react"; // we need this to make JSX compile
import styled from "@emotion/styled";

type NavBarTypes = {
  title: string;
};

const StyledNavBar = styled.div`
  width: 100vw;
  background-color: black;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const NavBar: FC<NavBarTypes> = ({ title }) => (
  <>
    <StyledNavBar>
      <h2>{title}</h2>
    </StyledNavBar>
  </>
);

export default NavBar;
