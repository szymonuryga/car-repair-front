import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Repair } from 'helpers/interfaces/Repair';
import { useRepairs } from 'hooks/useRepairs';

const RepairListItem: React.FC<Repair> = ({
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
  const { endOfRepair, assignPriceToRepair } = useRepairs();
  const handleFinishRepair = async (id: number) => {
    try {
      await endOfRepair(id);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  // const handleAsignPrice = async (id: number) => {
  //   try {
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div>
      <p>{email}</p>
      <p>
        {firstName} {lastName}
      </p>
      <p>{start?.substring(0, 10)}</p>
      <p>{registrationNumber}</p>
      {end ? (
        <p>{end.substring(0, 10)}</p>
      ) : (
        <Button isBlue onClick={() => handleFinishRepair(Number(id))}>
          Finish
        </Button>
      )}
      {price !== 0 ? <p>{price}</p> : ''}
      {/* <Button onClick={() => handleAsignPrice(Number(id))}>End</Button> */}
    </div>
  );
};

export default RepairListItem;
