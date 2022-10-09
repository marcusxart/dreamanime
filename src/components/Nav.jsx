import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import styled from "styled-components";

import logo from "../assets/img/logo.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="" />
        <p className="logo">
          Dream <br />
          Anime
        </p>
      </LogoContainer>
      <BtnContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <Hamburger
          direction="left"
          size={24}
          rounded
          toggled={toggle}
          toggle={setToggle}
          color={toggle ? "#c9a4ff" : "#f5f4fa"}
        />
      </BtnContainer>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 5vw 1.2rem calc(5vw + 10px);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    opacity: 0.8;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  color: var(--grey);
  align-items: center;
  gap: 0.8rem;
  p {
    height: 1rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
