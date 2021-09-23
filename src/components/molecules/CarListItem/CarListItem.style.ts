import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 0.7fr 2fr; 
  grid-template-rows: 0.15fr; 
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