import { useCars } from 'hooks/useCars';
import { useEffect, useState } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Car } from 'helpers/interfaces/Car';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { StyledList } from 'components/atoms/List/List';
import CarListItem from 'components/molecules/CarListItem/CarListItem';
import { Header } from 'components/atoms/Header/Header';
import { Link } from 'react-router-dom';

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const { getAllCars } = useCars();

  useEffect(() => {
    (async () => {
      const cars = await getAllCars();
      setCars(cars);
    })();
  }, [getAllCars]);
  return (
    <ViewWrapper>
      <Header>
        <Title>Cars</Title>
        <Link to="cars/add">
          <Button isBig>Add</Button>
        </Link>
      </Header>
      <StyledList>
        {cars.length > 0 &&
          cars.map((car: Car) => (
            <CarListItem id={car.id} registrationNumber={car.registrationNumber} brand={car.brand} model={car.model} vin={car.vin} key={car.id} />
          ))}
      </StyledList>
    </ViewWrapper>
  );
};

export default CarsList;
