import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Error } from 'components/atoms/Error/Error';
import { useCars } from 'hooks/useCars';

const initalCarState = {
  registrationNumber: '',
  brand: '',
  model: '',
  vin: '',
};

const CarForm = () => {
  const [carFormValues, setCarFormValues] = useState(initalCarState);
  const [error, setError] = useState<Array<string>>([]);
  const [isValid, setIsValid] = useState(false);
  const { addCar } = useCars();
  let history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarFormValues({
      ...carFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let errors: Array<string> = [];
    let registrationNumber = carFormValues.registrationNumber.trim().length;
    if (registrationNumber !== 7 && registrationNumber !== 8) {
      errors.push('Registration number is invalid');
    }
    carFormValues.brand.trim() === '' && errors.push('Brand is required');
    carFormValues.model.trim() === '' && errors.push('Model is required');
    carFormValues.vin.trim().length !== 17 && errors.push('Registration number is invalid');
    setIsValid(errors.length === 0);
    setError(errors);
  };

  const handleAddClient = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    validate();
    if (isValid) {
      const newCar = {
        registrationNumber: carFormValues.registrationNumber.trim(),
        brand: carFormValues.brand.trim(),
        model: carFormValues.model.trim(),
        vin: carFormValues.vin.trim(),
      };

      try {
        await addCar(newCar);
      } catch (e) {
        console.log(e);
      }
      setCarFormValues(initalCarState);
      setTimeout(() => {
        history.push('/cars');
      }, 400);
    }
  };

  return (
    <>
      <ViewWrapper isForm as="form" onSubmit={handleAddClient}>
        <Title>Add new Car</Title>
        <FormField
          label="Registration Number"
          id="registrationNumber"
          name="registrationNumber"
          value={carFormValues.registrationNumber}
          onChange={handleInputChange}
        />
        <FormField label="Brand" id="brand" name="brand" value={carFormValues.brand} onChange={handleInputChange} />
        <FormField label="Model" id="model" name="model" value={carFormValues.model} onChange={handleInputChange} />
        <FormField label="Vin" id="vin" name="vin" value={carFormValues.vin} onChange={handleInputChange} />
        {error.length !== 0 && <Error>{error[error.length - 1]}</Error>}
        <Button isBig type="submit">
          Add
        </Button>
      </ViewWrapper>
    </>
  );
};

export default CarForm;
