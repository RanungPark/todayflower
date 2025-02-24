import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  testId?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ testId, ...props }, ref) => {
    return <InputStyled readOnly {...props} ref={ref} data-cy={testId} />;
  },
);

Input.displayName = 'DropDownInput';

const InputStyled = styled.input`
  ${({ theme }) => theme.typography.Caption};
  flex: 1;

  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`;

export default Input;
