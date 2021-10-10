import { useClients } from 'hooks/useClients';
import React, { useEffect, useState } from 'react';
import { Client } from 'helpers/interfaces/Client';
import ClientListItem from 'components/molecules/ClientListItem/ClientListItem';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { StyledList } from 'components/atoms/List/List';
import { Title } from 'components/atoms/Title/Title';
import { Header } from 'components/atoms/Header/Header';
import { Link } from 'react-router-dom';
import Pagination from 'components/molecules/Pagination/Pagination';

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const { getAllClients } = useClients();
  const dataLimit = window.innerHeight < 900 ? 7 : 12;
  const [pages, setPages] = useState(Math.ceil(clients.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(pages);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return clients.slice(startIndex, endIndex);
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
      const clients = await getAllClients();
      setClients(clients);
      setPages(Math.ceil(clients.length / dataLimit));
      if (pages) {
        const limit = pages < 4 ? pages : 4;
        setPageLimit(limit);
      }
    })();
  }, [getAllClients, pages]);
  return (
    <ViewWrapper>
      <Header>
        <Title>Clients</Title>
        <Link to="clients/add">
          <Button isBig isGreen>
            Add
          </Button>
        </Link>
      </Header>
      <StyledList>
        {clients.length > 0 &&
          clients.map((client: Client) => (
            <ClientListItem
              id={client.id}
              firstName={client.firstName}
              lastName={client.lastName}
              nationalId={client.nationalId}
              phoneNumber={client.phoneNumber}
              key={client.id}
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

export default ClientsList;
