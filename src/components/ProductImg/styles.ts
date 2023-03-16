import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .Close {
    width: 20px;
    height: 20px;

    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .Arrow {
    width: 45px;
    height: 30px;

    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  img {
    width: 449px;
    height: 222px;
    object-fit: cover;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;
