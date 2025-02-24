import { FieldValues, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { ReactComponent as CaretDown } from '@assets/icons/wght300/CaretDown.svg';
import { ReactComponent as CaretUp } from '@assets/icons/wght300/CaretUp.svg';
import IconButton from '@components/buttons/IconButton';
import { useDropDonw } from '@contexts/SelectBoxContext';
import { mixins } from '@styles/Mixin';
import { InputType } from 'src/@types/inputField';

import Input from './Input';
import { defalutStyle, disabledStyle } from '../Styles';

interface LabelProps<T extends FieldValues> {
  input: InputType<T>;
  disabled?: boolean;
}

const Label = <T extends FieldValues>({
  input: { id, type = 'text', placeholder, option, testId },
  disabled,
}: LabelProps<T>) => {
  const { register } = useFormContext<T>();

  const { inputValue, isOpen, handleIsOpen } = useDropDonw();

  return (
    <LabelStyled $disabled={disabled} htmlFor={id}>
      <Input
        id={id}
        type={type}
        onClick={handleIsOpen}
        disabled={disabled}
        placeholder={placeholder}
        value={inputValue}
        {...register(id, {
          ...option,
        })}
        testId={testId}
      />
      {isOpen ? (
        <IconButton aria-label="caret up">
          <CaretUp />
        </IconButton>
      ) : (
        <IconButton aria-label="caret down">
          <CaretDown />
        </IconButton>
      )}
    </LabelStyled>
  );
};

const LabelStyled = styled.label<{ $disabled?: boolean }>`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ $disabled }) => (!$disabled ? defalutStyle : disabledStyle)}
  width: 100%;
  max-height: 56px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

export default Label;
