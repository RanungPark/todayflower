import { createContext, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import Input from '@components/stepper/components/Input';
import MinusButton from '@components/stepper/components/MinusButton';
import PlusButton from '@components/stepper/components/PlusButton';
import { mixins } from '@styles/Mixin';

interface StepperValueType {
  step: number;
  handleMinusClick: () => void;
  handlePlusClick: () => void;
}

const StepperContext = createContext<StepperValueType | null>(null);

export const Stepper = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);

  const handleMinusClick = () => {
    setStep((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handlePlusClick = () => {
    setStep((prevValue) => prevValue + 1);
  };

  const value = useMemo(
    () => ({ step, handleMinusClick, handlePlusClick }),
    [step],
  );

  return (
    <StepperContext.Provider value={value}>
      <StepperStyled>{children}</StepperStyled>
    </StepperContext.Provider>
  );
};

Stepper.Input = Input;
Stepper.PlusButton = PlusButton;
Stepper.MinusButton = MinusButton;

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('Stepper 내부에서 사용해야 합니다.');
  }
  return context;
};

const StepperStyled = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  max-width: 146px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  & button:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  & button:last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;
