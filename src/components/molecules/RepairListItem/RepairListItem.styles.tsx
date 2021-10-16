import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 4.5fr 1fr 1fr;
  grid-template-rows: 0.2fr;
  gap: 0px 20px;
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

export const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr;
  grid-template-rows: 0.2fr;
  gap: 0px 20px;
`;
