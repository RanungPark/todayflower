import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';

interface CheckboxProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  value: string;
  label: string;
}

const Input = <T extends FieldValues>({
  field,
  value,
  label,
}: CheckboxProps<T>) => {
  const isChecked = Array.isArray(field.value) && field.value.includes(value);

  const handleChange = () => {
    if (isChecked) {
      field.onChange(field.value.filter((v: string) => v !== value));
    } else {
      field.onChange([...field.value, value]);
    }
  };

  return (
    <LableStyled>
      <HiddenInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      {isChecked && <Check />}
      <Value>{label}</Value>
    </LableStyled>
  );
};

const LableStyled = styled.label`
  position: relative;

  width: auto;
  height: auto;

  cursor: pointer;

  & svg {
    display: none;
  }

  & input,
  p {
    vertical-align: text-top;
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};

    & input {
      border: 1px solid ${({ theme }) => theme.colors.darkgray};
    }

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const HiddenInput = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightgray};

  cursor: pointer;

  appearance: none;

  &:checked {
    & + svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const Value = styled.p`
  ${({ theme }) => theme.typography.CaptionBold}
  display: inline-block;
`;

export default Input;
