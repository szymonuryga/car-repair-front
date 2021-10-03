import { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { StyledList } from 'components/atoms/List/List';
import { Title } from 'components/atoms/Title/Title';
import { Header } from 'components/atoms/Header/Header';
import { Link } from 'react-router-dom';
import Pagination from 'components/molecules/Pagination/Pagination';
import { useRepairs } from 'hooks/useRepairs';
import { Repair } from 'helpers/interfaces/Repair';
import RepairListItem from 'components/molecules/RepairListItem/RepairListItem';

const RepairsList = () => {
  const [repairs, setRepairs] = useState([]);
  const { getAllRepairs } = useRepairs();
  const dataLimit = window.innerHeight < 900 ? 7 : 12;
  const [pages, setPages] = useState(Math.ceil(repairs.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(pages);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return repairs.slice(startIndex, endIndex);
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
      const repairs = await getAllRepairs();
      setRepairs(repairs);
      setPages(Math.ceil(repairs.length / dataLimit));
      if (pages) {
        const limit = pages < 4 ? pages : 4;
        setPageLimit(limit);
      }
    })();
  }, [getAllRepairs, pages]);
  return (
    <ViewWrapper>
      <Header>
        <Title>Repair</Title>
        <Link to="repairs/add">
          <Button isBig>Add</Button>
        </Link>
      </Header>
      <StyledList>
        {getPaginatedData().length > 0 &&
          getPaginatedData().map((repair: Repair) => (
            <RepairListItem
              id={repair.id}
              firstName={repair.firstName}
              lastName={repair.lastName}
              price={repair.price}
              nationalId={repair.nationalId}
              registrationNumber={repair.registrationNumber}
              category={repair.category}
              email={repair.email}
              start={repair.start}
              end={repair.end}
              key={repair.id}
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

export default RepairsList;
