import React from "react";
import styled from "styled-components";

const Badge = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Badge;

const Container = styled.span`
  text-transform: capitalize;
  background-color: var(--offset);
  color: var(--white);
  font-weight: 700;
  font-size: 1rem;
  padding: 0.4rem 1rem;
`;
