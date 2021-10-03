import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import { ComboBoxWrapper, SearchResults, SearchResultsItem, SearchWrapper } from 'components/organisms/CombBox/ComboBox.styles';
import { Label } from 'components/atoms/Label/Label';

type Props = {
  items: Array<string>;
  handleSelectedItemChange: (item: any) => void;
  label: string;
  name: string;
  id: string;
  type?: string | number;
};

export const ComboBox: React.FC<Props> = ({ items, handleSelectedItemChange, label, name, id, type = 'text' }) => {
  const [inputItems, setInputItems] = useState(items);

  const { isOpen, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: inputItems,
    onSelectedItemChange: handleSelectedItemChange,
    onInputValueChange: ({ inputValue }: any) => {
      setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
    },
  });

  return (
    <ComboBoxWrapper>
      <Label {...getLabelProps()} htmlFor={id}>
        {label}
      </Label>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name={name} id={id} type={type} />
        <SearchResults isVisible={isOpen && inputItems.length > 0} {...getMenuProps()} aria-label="results">
          {isOpen &&
            inputItems.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item}>
                {item}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </ComboBoxWrapper>
  );
};
