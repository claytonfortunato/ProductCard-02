import styled from "styled-components";

export const Container = styled.div`
  color: #271a45;

  span {
    font-weight: 300;
    font-size: 0.625rem;
    line-height: 1;
  }

  h2 {
    font-size: 2rem;
    line-height: 1;
    margin: 0.75rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1;
  }
`;

export const Button = styled.button`
  all: unset;
  margin-top: 1.25rem;
  border: 1px solid #271a45;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  text-transform: uppercase;
`;
