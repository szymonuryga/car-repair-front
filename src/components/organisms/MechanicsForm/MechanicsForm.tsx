import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useState } from 'react';
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
  const [error, setError] = useState<Array<string>>([]);
  const [isValid, setIsValid] = useState(false);
  const { addMechanic } = useMechanics();
  let history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMechanicFormValues({
      ...mechanicFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let errors: Array<string> = [];
    const phoneRegex = /\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{3})/;
    mechanicFormValues.firstName.trim() === '' && errors.push('First Name is required');
    mechanicFormValues.lastName.trim() === '' && errors.push('Lasst Name is required');
    if (!phoneRegex.test(mechanicFormValues.phoneNumber)) {
      errors.push('Phone number must have 9 digits');
    }
    mechanicFormValues.salary < 0 && errors.push('Salary must be positive number');
    setIsValid(errors.length === 0);
    setError(errors);
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
        {error.length !== 0 && <Error>{error[error.length - 1]}</Error>}
        <Button isBig type="submit">
          Add
        </Button>
      </ViewWrapper>
    </>
  );
};

export default MechanicsForm;
