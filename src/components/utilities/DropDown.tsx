import { useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as CaretDown } from '@assets/icons/wght300/CaretDown.svg';
import { ReactComponent as CaretUp } from '@assets/icons/wght300/CaretUp.svg';
import IconButton from '@components/buttons/IconButton';
import DropDownOptionList from '@components/lists/DropDownOptionList';
import { mixins } from '@styles/Mixin';

interface DropDownProps {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  testId?: string;
}

type DropDownLabelProps = Pick<DropDownProps, 'disabled'>;

const DropDown = ({
  options,
  placeholder,
  value,
  onChange,
  disabled = false,
  testId,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleClickLi = (e: React.MouseEvent) => {
    const optionValue = e.currentTarget.getAttribute('data-value');
    if (optionValue) {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  return (
    <>
      <DropDownLabel disabled={disabled} data-cy={testId}>
        <DropDownInput
          type="text"
          readOnly
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onClick={handleIsOpen}
        />
        {isOpen ? (
          <IconButton
            onClick={(e) => e.preventDefault()}
            IconComponent={CaretUp}
            ariaLabel="caret up"
          />
        ) : (
          <IconButton
            onClick={(e) => e.preventDefault()}
            IconComponent={CaretDown}
            ariaLabel="caret down"
          />
        )}
      </DropDownLabel>
      {isOpen ? (
        <DropDownOptionList onClick={handleClickLi} options={options} />
      ) : (
        <></>
      )}
    </>
  );
};

const defalutStyle = css`
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:focus-within {
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.colors.gray}`};
  }

  & path {
    fill: ${({ theme }) => theme.colors.black};
  }

  & button {
    cursor: pointer;
  }
`;

const disabledStyle = css`
  background-color: ${({ theme }) => theme.colors.extralight};

  pointer-events: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
  }

  &:focus-within {
    box-shadow: 0 0 0;
  }

  & path {
    fill: ${({ theme }) => theme.colors.lightgray};
  }

  & button {
    pointer-events: none;
  }
`;

const DropDownLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => prop !== 'disabled',
})<DropDownLabelProps>`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ disabled }) => (!disabled ? defalutStyle : disabledStyle)}
  width: 100%;
  max-height: 56px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const DropDownInput = styled.input`
  ${({ theme }) => theme.typography.Caption};
  flex: 1;

  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`;

export default DropDown;
