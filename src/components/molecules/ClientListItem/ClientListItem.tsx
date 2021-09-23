import { Button } from 'components/atoms/Button/Button';
import { Client } from 'helpers/interfaces/Client';
import { useClients } from 'hooks/useClients';
import React from 'react';
import { Wrapper } from './ClientListItem.styles';

const ClientListItem: React.FC<Client> = ({ id, firstName, lastName, nationalId, phoneNumber }): JSX.Element => {
  const { removeClient } = useClients();
  const handleDeleteClient = async (id: number) => {
    try {
      await removeClient(id);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{nationalId}</p>
      <p>{phoneNumber}</p>
      <Button onClick={() => console.log(Number(id))}>X</Button>
    </Wrapper>
  );
};

export default ClientListItem;
