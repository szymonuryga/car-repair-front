import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Repair } from 'helpers/interfaces/Repair';
import { useRepairs } from 'hooks/useRepairs';
import { SubWrapper, Wrapper } from './RepairListItem.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import AssignPriceForm from '../AssignPriceForm/AssignPriceForm';

const RepairListItem: React.FC<Repair> = ({ id, start, end, price, registrationNumber, email, onClick }): JSX.Element => {
  const { endOfRepair } = useRepairs();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentRepairId, setCurrentRepairId] = useState<number>();

  const handleFinishRepair = async (id: number) => {
    try {
      await endOfRepair(id);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleAsignPrice = async (id: number) => {
    try {
      setCurrentRepairId(id);
      handleOpenModal();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <SubWrapper onClick={onClick}>
        <p>{email}</p>
        <p>{start?.substring(0, 10)}</p>
        <p>{registrationNumber}</p>
      </SubWrapper>
      {end ? (
        <p>{end.substring(0, 10)}</p>
      ) : (
        <Button isBlue onClick={() => handleFinishRepair(Number(id))}>
          Finish
        </Button>
      )}
      {price !== 0 ? (
        <p>{price}$</p>
      ) : (
        <Button isBlue onClick={() => handleAsignPrice(Number(id))}>
          Assign Price
        </Button>
      )}
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        {currentRepairId ? <AssignPriceForm id={currentRepairId} /> : <p>Problem occured</p>}
      </Modal>
    </Wrapper>
  );
};

export default RepairListItem;
