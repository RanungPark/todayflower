import {useFormContext} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {paymentsDone} from '@constants/toast';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';
import {useCartStore} from '@store/cartStore';
import {Button} from '@todayflower-public/ui';
import HookFormInputField from '@components/HookFormInputField';
import {Step3InputDatas} from '@data/checkout';
import {mixins} from '@styles/Mixin';

import type {CheckoutFormDataType} from '../Forms';

export const GroupedInputFields = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;

export const StepCurrStyled = styled.div`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 24px;
  width: 100%;
`;

const Step3CurrInputFileds = () => {
  const {trigger} = useFormContext<CheckoutFormDataType>();
  const navigate = useNavigate();
  const {state, dispatch} = useCheckoutStep();
  const {clearCart} = useCartStore();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger(['cardNumber', 'cardValidateDate', 'cardValidateCVV']);
    if (!isValid) return;

    dispatch({type: 'STEP_DONE', step: 'thirdStep'});
    paymentsDone();
    clearCart();
    navigate('/');
  };

  return (
    <StepCurrStyled>
      {state.thirdStep.title}
      {Step3InputDatas.map((inputDatas, index) => {
        const {inputType} = inputDatas;
        switch (inputType) {
          case 'normal': {
            const {input} = inputDatas;
            return <HookFormInputField<CheckoutFormDataType> key={input.id} input={input} />;
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
      <Button full onClick={handleSubmit}>
        make a purchase
      </Button>
    </StepCurrStyled>
  );
};

export default Step3CurrInputFileds;
