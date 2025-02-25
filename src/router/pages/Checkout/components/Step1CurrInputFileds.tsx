import React from 'react';
import { useFormContext } from 'react-hook-form';

import PrimaryButton from '@components/buttons/PrimaryButton';
import InputFiled from '@components/inputField';
import { useCheckoutStep } from '@contexts/CheckoutStepContext';
import { Step1InputDatas } from '@data/checkout';

import { CheckoutFormDataType } from '../forms';
import { StepCurrStyled } from '../styles';

const Step1CurrInputFileds = () => {
  const { state, dispatch } = useCheckoutStep();
  const { trigger } = useFormContext<CheckoutFormDataType>();

  const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger(['name', 'email', 'phone']);
    if (!isValid) return;

    dispatch({ type: 'STEP_DONE', step: 'firstStep' });
  };

  return (
    <StepCurrStyled>
      {state.firstStep.title}
      {Step1InputDatas.map((inputData) => (
        <InputFiled<CheckoutFormDataType>
          key={inputData.id}
          input={inputData}
        />
      ))}

      <PrimaryButton onClick={handleNextStep} testId="nextStepBtn">
        Continue to shipping
      </PrimaryButton>
    </StepCurrStyled>
  );
};

export default Step1CurrInputFileds;
