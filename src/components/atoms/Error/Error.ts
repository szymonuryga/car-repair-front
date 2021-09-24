import styled from 'styled-components';

export const Error = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.error};
  max-width: 250px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 5px;
`;
