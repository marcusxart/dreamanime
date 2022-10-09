import React from "react";
import styled from "styled-components";

const Grid = ({ children }) => {
  return <Contaner>{children}</Contaner>;
};

export default Grid;

const Contaner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem 1.4rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
