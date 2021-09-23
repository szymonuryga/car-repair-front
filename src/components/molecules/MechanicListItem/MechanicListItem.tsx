import React from 'react';
import { Mechanic } from 'helpers/interfaces/Mechanic';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './MechanicListItem.styles';

const MechanicListItem: React.FC<Mechanic> = ({ id, firstName, lastName, email, phoneNumber, salary }): JSX.Element => {
  return (
    <Wrapper>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{salary}$</p>
      <Button onClick={() => console.log(Number(id))}>X</Button>
    </Wrapper>
  );
};

export default MechanicListItem;
