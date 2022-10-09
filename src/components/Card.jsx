import React from "react";
import styled from "styled-components";

import Badge from "./Badge";

const Card = ({ img, title, episode, isSub }) => {
  return (
    <Container>
      <ImgContainer>
        <img src={img} alt="" />
        <BadgeWrapper>
          <Badge title={`episode ${episode}`} />
        </BadgeWrapper>
        <Sub>
          <Badge title={` ${isSub}`} type="secondary" />
        </Sub>
      </ImgContainer>

      <NameContainer>
        <p>{title}</p>
      </NameContainer>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  text-transform: capitalize;
`;

const ImgContainer = styled.div`
  height: 32vh;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  border: 0.2rem solid grey;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameContainer = styled.div`
  text-align: center;
  word-wrap: break-word;
  padding: 0.5rem 0;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0;
`;

const Sub = styled.div`
  position: absolute;
  bottom: 0.2rem;
  left: 0;
`;
