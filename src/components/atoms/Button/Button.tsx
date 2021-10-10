import styled from 'styled-components';

interface BigProps {
  isBig?: boolean;
  isGreen?: boolean;
  isRed?: boolean;
  isBlue?: boolean;
}

export const Button = styled.button<BigProps>`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: ${({ isGreen, isRed, isBlue, theme }) => (isRed || isGreen || isBlue ? theme.colors.white : theme.colors.darkGrey)};
  background-color: ${({ isGreen, isRed, isBlue, theme }) =>
    isRed ? theme.colors.red : isGreen ? theme.colors.green : isBlue ? theme.colors.blue : theme.colors.lightPurple};
`;
