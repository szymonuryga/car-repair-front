import React from 'react';
import { Repair } from 'helpers/interfaces/Repair';
import { SubWrapper, Wrapper, BoldTitle, StyledDetails } from './RepairDetails.styles';
import { Title } from 'components/atoms/Title/Title';

const RepairDetails: React.FC<Repair> = ({
  id,
  start,
  end,
  price,
  nationalId,
  firstName,
  lastName,
  registrationNumber,
  email,
  category,
}): JSX.Element => {
  return (
    <Wrapper>
      <StyledDetails>
        <Title>Details</Title>
        <SubWrapper>
          <BoldTitle>Category:</BoldTitle>
          <p>{category}</p>
        </SubWrapper>
        <SubWrapper>
          <BoldTitle>Start:</BoldTitle>
          <p>{start?.substring(0, 10)}</p>
        </SubWrapper>
        <SubWrapper>
          <BoldTitle>End:</BoldTitle>
          <p>{end ? end?.substring(0, 10) : 'Active'}</p>
        </SubWrapper>
        <SubWrapper>
          <BoldTitle>Price:</BoldTitle>
          <p>{price ? price + '$' : 'Not assigned price'}</p>
        </SubWrapper>
      </StyledDetails>
      <StyledDetails>
        <Title>Mechanic</Title>
        <SubWrapper>
          <BoldTitle>Email:</BoldTitle>
          <p>{email}</p>
        </SubWrapper>
      </StyledDetails>
      <StyledDetails>
        <Title>Car</Title>
        <SubWrapper>
          <BoldTitle>Registration Number:</BoldTitle>
          <p>{registrationNumber}</p>
        </SubWrapper>
      </StyledDetails>
      <div>
        <Title>Client</Title>
        <SubWrapper>
          <BoldTitle>Name:</BoldTitle>
          <p>
            {firstName} {lastName}
          </p>
        </SubWrapper>
        <SubWrapper>
          <BoldTitle>National Id:</BoldTitle>
          <p>{nationalId}</p>
        </SubWrapper>
      </div>
    </Wrapper>
  );
};

export default RepairDetails;
