import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { StyledList } from 'components/atoms/List/List';
import { Title } from 'components/atoms/Title/Title';
import { Header } from 'components/atoms/Header/Header';
import { useMechanics } from 'hooks/useMechanics';
import { Mechanic } from 'helpers/interfaces/Mechanic';
import MechanicListItem from 'components/molecules/MechanicListItem/MechanicListItem';
import { Link } from 'react-router-dom';

const MechanicsList = () => {
  const [mechanics, setMechanics] = useState([]);
  const { getAllMechanics } = useMechanics();

  useEffect(() => {
    (async () => {
      const mechanics = await getAllMechanics();
      setMechanics(mechanics);
    })();
  }, [getAllMechanics]);
  return (
    <ViewWrapper>
      <Header>
        <Title>Mechanics</Title>
        <Link to="mechanics/add">
          <Button isBig>Add</Button>
        </Link>
      </Header>
      <StyledList>
        {mechanics.length > 0 &&
          mechanics.map((mechanic: Mechanic) => (
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
    </ViewWrapper>
  );
};

export default MechanicsList;
