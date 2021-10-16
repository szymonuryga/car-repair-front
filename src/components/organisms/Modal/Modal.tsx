import React from 'react';
import { ModalWrapper } from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';

type Props = {
  handleClose: () => void;
  isOpen: boolean;
  children: any;
};

const Modal: React.FC<Props> = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root') || undefined} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button isBig onClick={handleClose}>
        Close
      </Button>
    </ModalWrapper>
  );
};

export default Modal;
