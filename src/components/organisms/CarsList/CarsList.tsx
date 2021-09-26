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
import Pagination from 'components/molecules/Pagination/Pagination';

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const { getAllCars } = useCars();
  const dataLimit = window.innerHeight < 900 ? 7 : 12;
  const [pages, setPages] = useState(Math.ceil(cars.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(pages);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return cars.slice(startIndex, endIndex);
  };

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(page: number) {
    setCurrentPage(page);
  }

  useEffect(() => {
    (async () => {
      const cars = await getAllCars();
      setCars(cars);
      setPages(Math.ceil(cars.length / dataLimit));
      if (pages) {
        const limit = pages < 4 ? pages : 4;
        setPageLimit(limit);
      }
    })();
  }, [getAllCars, pages]);
  return (
    <ViewWrapper>
      <Header>
        <Title>Cars</Title>
        <Link to="cars/add">
          <Button isBig>Add</Button>
        </Link>
      </Header>
      <StyledList>
        {getPaginatedData().length > 0 &&
          getPaginatedData().map((car: Car) => (
            <CarListItem id={car.id} registrationNumber={car.registrationNumber} brand={car.brand} model={car.model} vin={car.vin} key={car.id} />
          ))}
      </StyledList>
      {pages > 1 && (
        <Pagination
          currentPage={currentPage}
          pages={pages}
          pageLimit={pageLimit}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          changePage={changePage}
        />
      )}
    </ViewWrapper>
  );
};

export default CarsList;
