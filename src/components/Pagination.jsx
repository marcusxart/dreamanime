import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Pagination = () => {
  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break"
        nextLabel=">"
        pageRangeDisplayed={3}
        pageCount={100}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 0.1rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 0.6rem;
    font-size: 1.4rem;
    border-radius: 0.3rem;
  }
  .break {
    background-color: #0000008d;
  }
`;
