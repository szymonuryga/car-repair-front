import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled(ViewWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0;
  min-height: 225px;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0 0 20px 0;
    font-size: 19px;
    font-weight: 500;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  p {
    margin-bottom: 0;
  }
  img {
    max-width: 100px;
    object-fit: cover;
  }
`;
