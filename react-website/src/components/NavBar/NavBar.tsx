import React, { FC } from "react"; // we need this to make JSX compile
import styled from "@emotion/styled";

type NavBarTypes = {
  title: string;
};

type propsStyledDiv = {
  alignment: string;
};

const StyledNavBar = styled.div`
  width: 100vw;
  background-color: black;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
  display: flex;
  flex-direction: row;
  height: 40px;
`;
const StyledDivSection = styled.div<propsStyledDiv>`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: ${(props) => props.alignment};
`;
const StyledButtonMenu = styled.button`
  display: flex;
  justify-content: start;
  margin: 0 10px;
  width: 50px;
`;

const NavBar: FC<NavBarTypes> = ({ title }) => (
  <>
    <StyledNavBar>
      <StyledDivSection alignment="start">
        <StyledButtonMenu>Button</StyledButtonMenu>
      </StyledDivSection>
      <StyledDivSection alignment="center">
        <h2>{title}</h2>
      </StyledDivSection>
      <StyledDivSection alignment="end"></StyledDivSection>
    </StyledNavBar>
  </>
);

export default NavBar;
