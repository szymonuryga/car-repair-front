import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

interface HighlightedProps {
  isHighlighted: boolean;
}

interface VisibleProps {
  isVisible: boolean;
}

export const ComboBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${Input} {
    width: 100%;
    max-width: 350px;
  }
  ${Label} {
    margin: 10px 0;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul<VisibleProps>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchResultsItem = styled.li<HighlightedProps>`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightPurple : theme.colors.white)};
  width: 100%;
  padding: 20px 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
