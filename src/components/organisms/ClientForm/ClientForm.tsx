import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useState } from 'react';
import { useClients } from 'hooks/useClients';
import { useHistory } from 'react-router-dom';
import { Error } from 'components/atoms/Error/Error';

const initalClientState = {
  firstName: '',
  lastName: '',
  nationalId: '',
  phoneNumber: '',
};

const ClientForm = () => {
  const [clientFormValues, setClientFormValues] = useState(initalClientState);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { addClient } = useClients();
  let history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientFormValues({
      ...clientFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (clientFormValues.firstName.trim() === '') {
      setError('First Name is required');
      setIsValid(false);
    }
    // clientFormValues.lastName.trim() === '' && setError('Lasst Name is required');
    // clientFormValues.nationalId.trim() === '' && setError('National ID is required');
    // clientFormValues.phoneNumber.trim() === '' && setError('Phone number is required');
    // clientFormValues.nationalId.trim().length === 11 && setError('National Id length must be 11');
    // clientFormValues.phoneNumber.trim().match(/\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{3})/)
    //   ? setError('Phone number must have pattern XXX-XXX-XXX')
    //   : setError('');
    setIsValid(error !== '');
  };

  const handleAddClient = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    validate();
    if (isValid) {
      const newClient = {
        firstName: clientFormValues.firstName.trim(),
        lastName: clientFormValues.lastName.trim(),
        nationalId: clientFormValues.nationalId.trim(),
        phoneNumber: clientFormValues.phoneNumber.trim(),
      };

      try {
        await addClient(newClient);
      } catch (e) {
        console.log(e);
      }
      setClientFormValues(initalClientState);
      setTimeout(() => {
        history.push('/clients');
      }, 300);
    }
  };

  return (
    <>
      <ViewWrapper isForm as="form" onSubmit={handleAddClient}>
        <Title>Add new Client</Title>
        <FormField label="First Name" id="firstName" name="firstName" value={clientFormValues.firstName} onChange={handleInputChange} />
        <FormField label="Last Name" id="lastName" name="lastName" value={clientFormValues.lastName} onChange={handleInputChange} />
        <FormField label="National Id" id="nationalId" name="nationalId" value={clientFormValues.nationalId} onChange={handleInputChange} />
        <FormField label="Phone Number" id="phoneNumber" name="phoneNumber" value={clientFormValues.phoneNumber} onChange={handleInputChange} />
        {error !== '' && <Error>{error}</Error>}
        <Button isBig type="submit">
          Add
        </Button>
      </ViewWrapper>
    </>
  );
};

export default ClientForm;
