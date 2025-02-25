import React from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { zIndex } from '@constants/zIndex';
import { ValidationState } from 'src/@types/common';
import { InputType } from 'src/@types/inputField';

import HelpMessage from './components/HelpMessage';
import Input from './components/Input';
import Label from './components/Label';

interface InputFiledProps<T extends FieldValues> {
  input: InputType<T>;
  children?: React.ReactNode;
  helpTestId?: string;
}

const InputFiled = <T extends FieldValues>({
  input: { id, type = 'text', placeholder, option, testId, onChange },
  children,
  helpTestId,
}: InputFiledProps<T>) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext<T>();

  const errorMessage = errors[id]?.message?.toString();

  const validationState: ValidationState = isSubmitSuccessful
    ? 'success'
    : errors[id]
      ? 'error'
      : 'default';

  return (
    <InputFiledStyled>
      {children && <Label htmlFor={id}>{children}</Label>}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        validationState={validationState}
        {...register(id, {
          ...option,
          onChange: (e) => {
            if (onChange) {
              onChange(e);
            }
          },
        })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        testId={testId}
      />
      <>
        {validationState === 'error' && (
          <HelpMessage validationState="error" testId={helpTestId}>
            {errorMessage}
          </HelpMessage>
        )}
        {validationState === 'success' && (
          <HelpMessage validationState="success" testId={helpTestId}>
            {'입력에 성공하였습니다.'}
          </HelpMessage>
        )}
      </>
    </InputFiledStyled>
  );
};

const InputFiledStyled = styled.div`
  position: relative;
  z-index: ${zIndex.textField};
  
  width: 100%;
`;

export default InputFiled;
