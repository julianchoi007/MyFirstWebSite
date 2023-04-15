import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="#home">Julian Choi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#professional">Career</Nav.Link>
          <Nav.Link href="#sideprojects">Side Projects</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Linkedin</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Github
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;

// import React, { FC } from "react"; // we need this to make JSX compile
// import styled from "@emotion/styled";

// type NavBarTypes = {
//   title: string;
// };

// type propsStyledDiv = {
//   alignment: string;
// };

// const StyledNavBar = styled.div`
//   width: 100vw;
//   background-color: black;
//   color: white;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   position: fixed;
//   display: flex;
//   flex-direction: row;
//   height: 40px;
// `;
// const StyledDivSection = styled.div<propsStyledDiv>`
//   display: flex;
//   flex-grow: 1;
//   flex-basis: 0;
//   justify-content: ${(props) => props.alignment};
// `;
// const StyledButtonMenu = styled.button`
//   display: flex;
//   justify-content: start;
//   margin: 0 10px;
//   width: 40px;
//   border-radius: 5px;
//   opacity: 0.5;
// `;

// const StyledImg = styled.img`
//   height: 100%;
//   width: 100%;
//   color: red;
// `;

// const NavBar: FC<NavBarTypes> = ({ title }) => (
//   <>
//     <StyledNavBar>
//       <StyledDivSection alignment="start">
//         <StyledButtonMenu>
//           <StyledImg src="/hamburger.png" alt="image" />
//         </StyledButtonMenu>
//       </StyledDivSection>
//       <StyledDivSection alignment="center">
//         <h2>{title}</h2>
//       </StyledDivSection>
//       <StyledDivSection alignment="end"></StyledDivSection>
//     </StyledNavBar>
//   </>
// );

// export default NavBar;
