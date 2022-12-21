import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
`;
export const Button = styled.button`
  width: 80px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 50px;
  /* background-color: inherit; */
  color: #000000;
  &.good {
    border-color: #00ff00;
    background-image: linear-gradient(to top left, #00ff00, #1a9930);
    /* background-color: green; */
  }
  &.neutral {
    border-color: yellow;
    background-image: linear-gradient(to top left, yellow, #c1ff2f);
  }
  &.bad {
    border-color: red;
    background-image: linear-gradient(to top left, red, #a00404);
  }
`;

