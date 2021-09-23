import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useState } from 'react';
import { useClients } from 'hooks/useClients';
import { useHistory } from 'react-router-dom';
import { Error } from 'components/atoms/Error/Error';
import { useMechanics } from 'hooks/useMechanics';

const initalMechanicState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  salary: 0,
};

const MechanicsForm = () => {
  const [mechanicFormValues, setMechanicFormValues] = useState(initalMechanicState);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { addMechanic } = useMechanics();
  let history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMechanicFormValues({
      ...mechanicFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (mechanicFormValues.firstName.trim() === '') {
      setError('First Name is required');
      setIsValid(false);
    }
    // mechanicFormValues.lastName.trim() === '' && setError('Lasst Name is required');
    // mechanicFormValues.nationalId.trim() === '' && setError('National ID is required');
    // mechanicFormValues.phoneNumber.trim() === '' && setError('Phone number is required');
    // mechanicFormValues.nationalId.trim().length === 11 && setError('National Id length must be 11');
    // mechanicFormValues.phoneNumber.trim().match(/\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{3})/)
    //   ? setError('Phone number must have pattern XXX-XXX-XXX')
    //   : setError('');
    setIsValid(error !== '');
  };

  const handleAddMechanic = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    validate();
    if (isValid) {
      const newMechanic = {
        firstName: mechanicFormValues.firstName.trim(),
        lastName: mechanicFormValues.lastName.trim(),
        phoneNumber: mechanicFormValues.phoneNumber.trim(),
        salary: mechanicFormValues.salary,
      };

      try {
        await addMechanic(newMechanic);
      } catch (e) {
        console.log(e);
      }
      setMechanicFormValues(initalMechanicState);
      setTimeout(() => {
        history.push('/mechanics');
      }, 300);
    }
  };

  return (
    <>
      <ViewWrapper isForm as="form" onSubmit={handleAddMechanic}>
        <Title>Add new Mechanic</Title>
        <FormField label="First Name" id="firstName" name="firstName" value={mechanicFormValues.firstName} onChange={handleInputChange} />
        <FormField label="Last Name" id="lastName" name="lastName" value={mechanicFormValues.lastName} onChange={handleInputChange} />
        <FormField label="Phone Number" id="phoneNumber" name="phoneNumber" value={mechanicFormValues.phoneNumber} onChange={handleInputChange} />
        <FormField label="Salary" id="salary" name="salary" type="number" value={mechanicFormValues.salary} onChange={handleInputChange} />
        {error !== '' && <Error>{error}</Error>}
        <Button isBig type="submit">
          Add
        </Button>
      </ViewWrapper>
    </>
  );
};

export default MechanicsForm;
