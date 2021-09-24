import React from 'react';
import { Car } from 'helpers/interfaces/Car';
import { Wrapper } from './CarListItem.style';
import { Button } from 'components/atoms/Button/Button';
import { useCars } from 'hooks/useCars';

const CarListItem: React.FC<Car> = ({ id, registrationNumber, brand, model, vin }): JSX.Element => {
  const { removeCar } = useCars();
  const handleDeleteCar = async (id: number) => {
    try {
      await removeCar(id);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <p>{registrationNumber}</p>
      <p>{brand}</p>
      <p>{model}</p>
      <p>{vin}</p>
      <Button onClick={() => handleDeleteCar(Number(id))}>X</Button>
    </Wrapper>
  );
};

export default CarListItem;
