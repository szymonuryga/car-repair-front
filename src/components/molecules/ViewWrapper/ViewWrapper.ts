import styled from 'styled-components';

interface FormProps {
  isForm?: boolean;
}

export const ViewWrapper = styled.div<FormProps>`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: ${({ isForm }) => (isForm ? '500px' : '700px')};
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display: ${({ isForm }) => (isForm ? 'flex' : 'block')};
  flex-direction: ${({ isForm }) => (isForm ? 'column' : '')};
  align-items: ${({ isForm }) => (isForm ? 'center' : '')};
`;
