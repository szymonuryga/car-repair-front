import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  padding: 25px;
  overflow-y: scroll;
`;

export const RankingSectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  h2 {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 10px;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
