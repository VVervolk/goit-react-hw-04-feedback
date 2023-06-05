import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;

  cursor: pointer;
  border: 1px solid #dddddd;
  border-radius: 4px;
  background-color: white;

  transition: all ease-in 250ms;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;
