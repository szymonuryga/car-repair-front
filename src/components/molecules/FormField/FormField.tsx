import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.styles';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | undefined;
  label: string;
  name: string;
  id: string;
  type?: string;
};

const FormField: React.FC<Props> = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default FormField;
