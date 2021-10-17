import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';

type Props = {
  message?: string;
};

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage: React.FC<Props> = ({ message = defaultErrorMessage }): JSX.Element => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
