import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { ValidationState } from 'src/@types/common';

import { TextFieldStyles } from '../styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  validationState?: ValidationState;
  testId?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ validationState = 'default', testId, ...props }, ref) => {
    return (
      <InputStyled
        $validationState={validationState}
        data-cy={testId}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

const InputStyled = styled.input<{ $validationState: ValidationState }>`
  ${({ theme }) => theme.typography.Caption};
  ${({ $validationState }) =>
    TextFieldStyles[$validationState] || TextFieldStyles.default};
  display: block;

  width: 100%;
  height: 56px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.white};

  cursor: text;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export default Input;
