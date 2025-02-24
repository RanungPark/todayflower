import React from 'react';
import styled from 'styled-components';

import Option from '@components/selectBox/components/Option';
import { useDropDonw } from '@contexts/SelectBoxContext';

interface OptionsProps {
  options: string[];
}

const Options = ({ options }: OptionsProps) => {
  const { isOpen, handleClickLi } = useDropDonw();

  return (
    <>
      {isOpen && (
        <OptionsStyled>
          {options.map((option, index) => (
            <Option
              onClick={handleClickLi}
              key={`option_${index}`}
              testId={`option${index + 1}`}
            >
              {option}
            </Option>
          ))}
        </OptionsStyled>
      )}
    </>
  );
};

const OptionsStyled = styled.ul`
  width: 100%;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkgray};

  & > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  & > li:last-child {
    border-bottom: none;
  }
`;

export default Options;
