import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

interface RadioButtonProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  value: string;
  label: string;
}

const RadioButton = <T extends FieldValues>({
  field,
  value,
  label,
}: RadioButtonProps<T>) => {
  return (
    <LabelStyled>
      <HiddenInput
        type="radio"
        value={value}
        checked={field.value === value}
        onChange={() => field.onChange(value)}
      />
      <Value>{label}</Value>
    </LabelStyled>
  );
};

const LabelStyled = styled.label`
  width: auto;
  height: auto;

  cursor: pointer;

  & input,
  p {
    vertical-align: text-top;
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};

    & input {
      border: 1px solid ${({ theme }) => theme.colors.gray};

      &::before {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const HiddenInput = styled.input`
  position: relative;

  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.lightgray};

  cursor: pointer;

  appearance: none;

  &:checked {
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;

      width: 14px;
      height: 14px;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.colors.black};

      transform: translate(-50%, -50%);

      content: '';
    }
  }
`;

const Value = styled.p`
  ${({ theme }) => theme.typography.Body}
  display: inline-block;
`;

export default RadioButton;
