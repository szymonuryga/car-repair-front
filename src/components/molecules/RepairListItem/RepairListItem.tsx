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
  const { endOfRepair } = useRepairs();
  const handleDeleteMechanic = async (id: number) => {
    console.log(id);
  };
  return (
    <div>
      <p>{price}</p>
      <p>{email}</p>
      <p>{start}</p>
      <p>{end}$</p>
      <p>{category}</p>
      <p>{nationalId}</p>
      <p>{registrationNumber}</p>
      <Button onClick={() => handleDeleteMechanic(Number(id))}>End</Button>
    </div>
  );
};

export default RepairListItem;
