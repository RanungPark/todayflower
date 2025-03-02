import { forwardRef } from 'react';
import styled from 'styled-components';

import { useStepper } from '@contexts/StepperContext';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  testId: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ testId, ...props }, ref) => {
    const { step } = useStepper();

    return (
      <InputStyled
        readOnly
        type="text"
        aria-label="stepper"
        value={step}
        ref={ref}
        data-cy={testId}
        {...props}
      />
    );
  },
);

Input.displayName = 'DropDownInput';

const InputStyled = styled.input`
  ${({ theme }) => theme.typography.Body};
  width: 59px;
  height: 100%;

  text-align: center;
`;

export default Input;
