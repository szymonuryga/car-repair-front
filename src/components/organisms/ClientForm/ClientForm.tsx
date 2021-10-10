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
  const [error, setError] = useState<Array<string>>([]);
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
    let errors: Array<string> = [];
    const phoneRegex = /\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{3})/;
    clientFormValues.firstName.trim() === '' && errors.push('First Name is required');
    clientFormValues.lastName.trim() === '' && errors.push('Lasst Name is required');
    clientFormValues.nationalId.trim().length !== 11 && errors.push('National Id length must be 11');
    if (!phoneRegex.test(clientFormValues.phoneNumber)) {
      errors.push('Phone number must have 9 digits');
    }
    setIsValid(errors.length === 0);
    setError(errors);
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
      }, 400);
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
        {error.length !== 0 && <Error>{error[error.length - 1]}</Error>}
        <Button isBig isGreen type="submit">
          Add
        </Button>
      </ViewWrapper>
    </>
  );
};

export default ClientForm;
