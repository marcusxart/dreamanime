import React from "react";
import styled from "styled-components";

const Tabs = ({ arr, activeTab, handleSwitch }) => {
  return (
    <Container>
      {arr.map((t) => (
        <span
          onClick={() => handleSwitch(t.id)}
          className={activeTab === t.id ? "active" : null}
          key={t.id}
        >
          {t.title}
        </span>
      ))}
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  text-transform: capitalize;

  span {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  .active {
    opacity: 1;
  }
`;
