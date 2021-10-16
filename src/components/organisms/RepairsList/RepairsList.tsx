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
import useModal from 'components/organisms/Modal/useModal';
import Modal from '../Modal/Modal';
import RepairDetails from 'components/molecules/RepairDetails/RepairDetails';

const RepairsList = () => {
  const [repairs, setRepairs] = useState([]);
  const { getAllRepairs, getRepairById } = useRepairs();
  const dataLimit = window.innerHeight < 900 ? 7 : 12;
  const [pages, setPages] = useState(Math.ceil(repairs.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(pages);
  const [currentRepair, setCurrentRepair] = useState<Repair>();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return repairs.slice(startIndex, endIndex);
  };

  const handleOpenRepairDetails = async (id: number) => {
    const repair = await getRepairById(id);
    setCurrentRepair(repair);
    handleOpenModal();
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
  }, [getAllRepairs, pages, dataLimit]);

  return (
    <ViewWrapper>
      <Header>
        <Title>Repair</Title>
        <Link to="repairs/add">
          <Button isBig isGreen>
            Add
          </Button>
        </Link>
      </Header>
      <StyledList>
        {getPaginatedData().length > 0 &&
          getPaginatedData().map((repair: Repair) => (
            <RepairListItem
              id={repair.id}
              price={repair.price}
              registrationNumber={repair.registrationNumber}
              email={repair.email}
              start={repair.start}
              end={repair.end}
              key={repair.id}
              nationalId={repair.nationalId}
              category={repair.category}
              onClick={() => handleOpenRepairDetails(Number(repair.id))}
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
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        {currentRepair ? (
          <RepairDetails
            id={currentRepair.id}
            firstName={currentRepair.firstName}
            lastName={currentRepair.lastName}
            price={currentRepair.price}
            nationalId={currentRepair.nationalId}
            registrationNumber={currentRepair.registrationNumber}
            category={currentRepair.category}
            email={currentRepair.email}
            start={currentRepair.start}
            end={currentRepair.end}
          />
        ) : (
          <p>Problem occured</p>
        )}
      </Modal>
    </ViewWrapper>
  );
};

export default RepairsList;
