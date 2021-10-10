import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Error } from 'components/atoms/Error/Error';
import { useRepairs } from 'hooks/useRepairs';
import { useMechanics } from 'hooks/useMechanics';
import { useClients } from 'hooks/useClients';
import { useCars } from 'hooks/useCars';
import { useCategories } from 'hooks/useCategories';
import { ComboBox } from '../CombBox/ComboBox';

const initalRepairState = {
  nationalId: '',
  registrationNumber: '',
  email: '',
  category: '',
  price: 0,
};

const RepairForm = () => {
  const [repairFormValues, setRepairFormValues] = useState(initalRepairState);
  const [mechanicsEmail, setMechanicsEmail] = useState([]);
  const [clientsNationalId, setClientsNationalId] = useState([]);
  const [carsRegistrationNumbers, setCarsRegistrationNumbers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState<Array<string>>([]);
  const [isValid, setIsValid] = useState(false);
  const { addRepair } = useRepairs();
  const { getAllMechanicsByEmails } = useMechanics();
  const { getAllClientsByNationlId } = useClients();
  const { getAllCarsByRegistrationNumbers } = useCars();
  const { getAllCategoriesName } = useCategories();
  let history = useHistory();

  const handleSelectedItemChangeNationalId = ({ selectedItem }: any) => {
    setRepairFormValues({
      ...repairFormValues,
      nationalId: selectedItem,
    });
  };

  const handleSelectedItemChangeEmail = ({ selectedItem }: any) => {
    setRepairFormValues({
      ...repairFormValues,
      email: selectedItem,
    });
  };

  const handleSelectedItemChangeRegistrationNumber = ({ selectedItem }: any) => {
    setRepairFormValues({
      ...repairFormValues,
      registrationNumber: selectedItem,
    });
  };

  const handleSelectedItemChangeCategory = ({ selectedItem }: any) => {
    setRepairFormValues({
      ...repairFormValues,
      category: selectedItem,
    });
  };

  const validate = () => {
    let errors: Array<string> = [];
    repairFormValues.nationalId.trim() === '' && errors.push('National Id is required');
    repairFormValues.registrationNumber.trim() === '' && errors.push('Registration Number is required');
    repairFormValues.email.trim() === '' && errors.push('Email is required');
    repairFormValues.category.trim() === '' && errors.push('Category is required');

    setIsValid(errors.length === 0);
    setError(errors);
  };

  const handleAddRepair = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    validate();
    if (isValid) {
      const newRepair = {
        registrationNumber: repairFormValues.registrationNumber.trim(),
        nationalId: repairFormValues.nationalId.trim(),
        email: repairFormValues.email.trim(),
        category: repairFormValues.category.trim(),
        price: 0,
      };

      try {
        await addRepair(newRepair);
      } catch (e) {
        console.log(e);
      }
      setRepairFormValues(initalRepairState);
      setTimeout(() => {
        history.push('/repairs');
      }, 400);
    }
  };

  useEffect(() => {
    (async () => {
      const clients = await getAllClientsByNationlId();
      setClientsNationalId(clients);
      const categories = await getAllCategoriesName();
      setCategories(categories);
      const mechanics = await getAllMechanicsByEmails();
      setMechanicsEmail(mechanics);
      const cars = await getAllCarsByRegistrationNumbers();
      setCarsRegistrationNumbers(cars);
    })();
  }, [getAllCarsByRegistrationNumbers, getAllCategoriesName, getAllMechanicsByEmails, getAllClientsByNationlId]);

  return (
    <>
      <ViewWrapper isForm as="form" onSubmit={handleAddRepair}>
        <Title>Add new Repair</Title>
        <ComboBox
          items={clientsNationalId}
          label="Client"
          name="clientsNationalId"
          id="clientsNationalId"
          handleSelectedItemChange={handleSelectedItemChangeNationalId}
        />
        <ComboBox
          items={mechanicsEmail}
          label="Mechanic"
          name="mechanicsEmail"
          id="mechanicsEmail"
          handleSelectedItemChange={handleSelectedItemChangeEmail}
        />
        <ComboBox
          items={carsRegistrationNumbers}
          label="Car"
          name="carsRegistrationNumbers"
          id="carsRegistrationNumbers"
          handleSelectedItemChange={handleSelectedItemChangeRegistrationNumber}
        />
        <ComboBox items={categories} label="Category" name="category" id="category" handleSelectedItemChange={handleSelectedItemChangeCategory} />
        {error.length !== 0 && <Error>{error[error.length - 1]}</Error>}
        <Button isBig isGreen type="submit">
          Add
        </Button>
      </ViewWrapper>
    </>
  );
};

export default RepairForm;
