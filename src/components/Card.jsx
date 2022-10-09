import React from "react";
import styled from "styled-components";

import Badge from "./Badge";
import img from "../assets/img/img2.jpg";

const Card = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={img} alt="" />
        <BadgeWrapper>
          <Badge title="episode 22" />
        </BadgeWrapper>
      </ImgContainer>
      <NameContainer>
        <p>black clover</p>
      </NameContainer>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-transform: capitalize;
`;

const ImgContainer = styled.div`
  height: 32vh;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameContainer = styled.div`
  font-size: 1.4rem;
  text-align: center;
  word-wrap: break-word;
  padding: 0.5rem 0;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
