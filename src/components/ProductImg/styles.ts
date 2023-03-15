import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  img {
    width: 449px;
    height: 222px;
    object-fit: cover;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;
