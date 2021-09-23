import React from 'react';
import { Car } from 'helpers/interfaces/Car';
import { Wrapper } from './CarListItem.style';

const CarListItem: React.FC<Car> = ({ registrationNumber, brand, model, vin }): JSX.Element => {
  return (
    <Wrapper>
      <p>{registrationNumber}</p>
      <p>{brand}</p>
      <p>{model}</p>
      <p>{vin}</p>
    </Wrapper>
  );
};

export default CarListItem;
