import React, { useState } from 'react';
import { Wrapper } from './AssignPriceForm.styles';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Error } from 'components/atoms/Error/Error';
import { Button } from 'components/atoms/Button/Button';
import { useRepairs } from 'hooks/useRepairs';
import useModal from 'components/organisms/Modal/useModal';
import { useError } from 'hooks/useError';

type Props = {
  id: number;
};

const AssignPriceForm: React.FC<Props> = ({ id }): JSX.Element => {
  const [price, setPrice] = useState<number>(0);
  const [error, setError] = useState<Array<string>>([]);
  const [isValid, setIsValid] = useState(false);
  const { assignPriceToRepair } = useRepairs();
  const { handleCloseModal } = useModal();
  const { dispatchError } = useError();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const validate = () => {
    let errors: Array<string> = [];
    !price && errors.push('Please assign a number');
    if (price) {
      price < 1 && errors.push('Please assign positive number');
    }
    setIsValid(errors.length === 0);
    setError(errors);
  };

  const handleAssignPrice = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    validate();
    if (isValid && price) {
      try {
        await assignPriceToRepair(id, price);
      } catch (e) {
        dispatchError('Invalid assign');
        console.log(e);
      }
      handleCloseModal();
      window.location.reload();
    }
  };

  return (
    <Wrapper isForm as="form" onSubmit={handleAssignPrice}>
      <Title>Assign price to Repaird Id : {id}</Title>
      <FormField label="Price" id="price" name="price" type="number" value={price} onChange={handleInputChange} />
      {error.length !== 0 && <Error>{error[error.length - 1]}</Error>}
      <Button isBlue isBig type="submit">
        Assign
      </Button>
    </Wrapper>
  );
};

export default AssignPriceForm;
