import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Repair } from 'helpers/interfaces/Repair';
import { useRepairs } from 'hooks/useRepairs';
import { SubWrapper, Wrapper } from './RepairListItem.styles';

const RepairListItem: React.FC<Repair> = ({ id, start, end, price, registrationNumber, email, onClick }): JSX.Element => {
  const { endOfRepair, assignPriceToRepair } = useRepairs();
  const handleFinishRepair = async (id: number) => {
    try {
      await endOfRepair(id);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleAsignPrice = async (id: number) => {
    try {
      console.log(id);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <SubWrapper onClick={onClick}>
        <p>{email}</p>
        <p>{start?.substring(0, 10)}</p>
        <p>{registrationNumber}</p>
      </SubWrapper>
      {end ? (
        <p>{end.substring(0, 10)}</p>
      ) : (
        <Button isBlue onClick={() => handleFinishRepair(Number(id))}>
          Finish
        </Button>
      )}
      {price !== 0 ? (
        <p>{price}$</p>
      ) : (
        <Button isBlue onClick={() => handleAsignPrice(Number(id))}>
          Assign Price
        </Button>
      )}
    </Wrapper>
  );
};

export default RepairListItem;
