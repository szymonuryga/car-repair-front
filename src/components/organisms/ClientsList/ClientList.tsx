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

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const { getAllClients } = useClients();

  useEffect(() => {
    (async () => {
      const clients = await getAllClients();
      setClients(clients);
    })();
  }, [getAllClients]);
  return (
    <ViewWrapper>
      <Header>
        <Title>Clients</Title>
        <Link to="clients/add">
          <Button isBig>Add</Button>
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
    </ViewWrapper>
  );
};

export default ClientsList;
