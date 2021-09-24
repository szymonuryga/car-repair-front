import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 3.5fr 1.5fr 1fr 1fr;
  grid-template-rows: 0.2fr;
  gap: 0px 30px;
  position: relative;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;
