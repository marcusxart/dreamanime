import React from "react";
import styled from "styled-components";

const Badge = ({ title, type = "primary" }) => {
  return <Container type={type}>{title}</Container>;
};

export default Badge;

const Container = styled.span`
  text-transform: capitalize;
  background-color: ${(p) =>
    p.type === "secondary" ? "var(--black)" : "var(--offset)"};
  color: ${(p) => (p.type === "secondary" ? "var(--white)" : "var(--white)")};
  font-weight: 700;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
  }
`;
