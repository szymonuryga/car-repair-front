import { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { StyledList } from 'components/atoms/List/List';
import { Title } from 'components/atoms/Title/Title';
import { Header } from 'components/atoms/Header/Header';
import { useMechanics } from 'hooks/useMechanics';
import { Mechanic } from 'helpers/interfaces/Mechanic';
import MechanicListItem from 'components/molecules/MechanicListItem/MechanicListItem';
import { Link } from 'react-router-dom';
import Pagination from 'components/molecules/Pagination/Pagination';

const MechanicsList = () => {
  const [mechanics, setMechanics] = useState([]);
  const { getAllMechanics } = useMechanics();
  const dataLimit = window.innerHeight < 900 ? 7 : 12;
  const [pages, setPages] = useState(Math.ceil(mechanics.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(pages);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return mechanics.slice(startIndex, endIndex);
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
      const mechanics = await getAllMechanics();
      setMechanics(mechanics);
      setPages(Math.ceil(mechanics.length / dataLimit));
      if (pages) {
        const limit = pages < 4 ? pages : 4;
        setPageLimit(limit);
      }
    })();
  }, [getAllMechanics, pages]);
  return (
    <ViewWrapper>
      <Header>
        <Title>Mechanics</Title>
        <Link to="mechanics/add">
          <Button isBig isGreen>
            Add
          </Button>
        </Link>
      </Header>
      <StyledList>
        {getPaginatedData().length > 0 &&
          getPaginatedData().map((mechanic: Mechanic) => (
            <MechanicListItem
              id={mechanic.id}
              firstName={mechanic.firstName}
              lastName={mechanic.lastName}
              email={mechanic.email}
              phoneNumber={mechanic.phoneNumber}
              salary={mechanic.salary}
              key={mechanic.id}
            />
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

export default MechanicsList;
