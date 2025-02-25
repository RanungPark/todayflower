import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  testId?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ testId, ...props }: InputProps) => {
    return <InputStyled readOnly data-cy={testId} {...props} />;
  },
);

Input.displayName = 'DataPickerInput';

const InputStyled = styled.input`
  ${({ theme }) => theme.typography.Caption}
  width: 100%;
  height: 100%;
  border: none;

  background-color: inherit;

  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default Input;
