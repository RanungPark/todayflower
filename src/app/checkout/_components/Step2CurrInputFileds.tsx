import {useFormContext} from 'react-hook-form';
import styled from 'styled-components';

import {useCheckoutStep} from '@contexts/CheckoutStepContext';
import {Button} from '@todayflower-public/ui';
import {Step2InputDatas} from '@data/checkout';
import HookFormInputField from '@components/HookFormInputField';
import {mixins} from '@styles/Mixin';
import HookFormSelectBox from '@components/HookFormSelectBox';

import type {CheckoutFormDataType} from '../Forms';

export const StepCurrStyled = styled.form`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 24px;
  width: 100%;
`;

export const GroupedInputFields = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;

const Step2CurrInputFileds = () => {
  const {state, dispatch} = useCheckoutStep();
  const {trigger} = useFormContext<CheckoutFormDataType>();

  const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger(['recipientName', 'recipientPhone', 'street', 'postalCode']);
    if (!isValid) return;

    dispatch({type: 'STEP_DONE', step: 'secondStep'});
  };

  return (
    <StepCurrStyled>
      {state.secondStep.title}
      {Step2InputDatas.map((inputDatas, index) => {
        const {inputType} = inputDatas;
        switch (inputType) {
          case 'normal': {
            const {input} = inputDatas;
            return <HookFormInputField<CheckoutFormDataType> key={input.id} input={input} />;
          }
          case 'selectBox': {
            const {input, options} = inputDatas;
            return <HookFormSelectBox<CheckoutFormDataType> input={input} options={options} />;
          }
          case 'group': {
            const {inputs} = inputDatas;
            return (
              <GroupedInputFields key={`${index}_inputs`}>
                {inputs.map((input) => (
                  <HookFormInputField<CheckoutFormDataType> key={input.id} input={input} />
                ))}
              </GroupedInputFields>
            );
          }
          default:
            return <></>;
        }
      })}
      <Button full onClick={handleNextStep}>
        Continue to Payment
      </Button>
    </StepCurrStyled>
  );
};

export default Step2CurrInputFileds;
