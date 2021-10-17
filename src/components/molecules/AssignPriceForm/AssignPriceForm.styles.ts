import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled(ViewWrapper)`
  margin: 25px 25px 0 25px;
  padding: 40px 50px 10px 50px;
  box-shadow: none;
`;

export const StyledDetails = styled.div`
  border-bottom: 1px solid #737c8e;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoldTitle = styled.p`
  font-weight: bold;
`;
