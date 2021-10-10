import React from 'react';
import { Mechanic } from 'helpers/interfaces/Mechanic';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './MechanicListItem.styles';
import { useMechanics } from 'hooks/useMechanics';

const MechanicListItem: React.FC<Mechanic> = ({ id, firstName, lastName, email, phoneNumber, salary }): JSX.Element => {
  const { removeMechanic } = useMechanics();
  const handleDeleteMechanic = async (id: number) => {
    try {
      await removeMechanic(id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{salary}$</p>
      <Button isRed onClick={() => handleDeleteMechanic(Number(id))}>
        X
      </Button>
    </Wrapper>
  );
};

export default MechanicListItem;
