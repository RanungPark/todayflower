import React from 'react';
import {useFormContext} from 'react-hook-form';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';
import {Button} from '@todayflower-public/ui';
import HookFormInputField from '@components/HookFormInputField';
import {Step1InputDatas} from '@data/checkout';
import styled from 'styled-components';
import {mixins} from '@styles/Mixin';
import type {CheckoutFormDataType} from '../Forms';

export const StepCurrStyled = styled.div`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 24px;

  width: 100%;
`;

const Step1CurrInputFileds = () => {
  const {state, dispatch} = useCheckoutStep();
  const {trigger} = useFormContext<CheckoutFormDataType>();

  const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger(['name', 'email', 'phone']);
    if (!isValid) return;

    dispatch({type: 'STEP_DONE', step: 'firstStep'});
  };

  return (
    <StepCurrStyled>
      {state.firstStep.title}
      {Step1InputDatas.map((inputData) => (
        <HookFormInputField<CheckoutFormDataType> key={inputData.id} input={inputData} />
      ))}

      <Button full onClick={handleNextStep}>
        Continue to shipping
      </Button>
    </StepCurrStyled>
  );
};

export default Step1CurrInputFileds;
