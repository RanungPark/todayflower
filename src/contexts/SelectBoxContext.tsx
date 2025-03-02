import React, { createContext, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import Label from '@components/selectBox/components/Label';
import Options from '@components/selectBox/components/Options';

interface SelectBoxValueType {
  isOpen: boolean;
  inputValue: string;
  handleIsOpen: () => void;
  handleClickLi: (optionValue: string) => void;
}

const SelectBoxContext = createContext<SelectBoxValueType | null>(null);

export const SelectBox = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickLi = (optionValue: string) => {
    setInputValue(optionValue);
    setIsOpen(false);
  };

  const value = useMemo(
    () => ({ isOpen, inputValue, handleIsOpen, handleClickLi }),
    [isOpen, inputValue],
  );

  return (
    <SelectBoxContext.Provider value={value}>
      <SelectStyled>{children}</SelectStyled>
    </SelectBoxContext.Provider>
  );
};

SelectBox.Label = Label;
SelectBox.Options = Options;

export const useSelectBox = () => {
  const context = useContext(SelectBoxContext);
  if (!context) {
    throw new Error('SelectBox 내부에서 사용해야 합니다.');
  }
  return context;
};

const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;
