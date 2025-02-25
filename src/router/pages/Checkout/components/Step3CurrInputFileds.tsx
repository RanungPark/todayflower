import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router';

import PrimaryButton from '@components/buttons/PrimaryButton';
import InputFiled from '@components/inputField';
import { paymentsDone } from '@constants/toast';
import { useCheckoutStep } from '@contexts/CheckoutStepContext';
import { Step3InputDatas } from '@data/checkout';
import { useCartStore } from '@store/cartStore';

import { CheckoutFormDataType } from '../forms';
import { GroupedInputFields, StepCurrStyled } from '../styles';

const Step3CurrInputFileds = () => {
  const { trigger } = useFormContext<CheckoutFormDataType>();
  const navigate = useNavigate();
  const { state, dispatch } = useCheckoutStep();
  const { clearCart } = useCartStore();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger([
      'cardNumber',
      'cardValidateDate',
      'cardValidateCVV',
    ]);
    if (!isValid) return;

    dispatch({ type: 'STEP_DONE', step: 'thirdStep' });
    paymentsDone();
    clearCart();
    navigate('/');
  };

  return (
    <StepCurrStyled>
      {state.thirdStep.title}
      {Step3InputDatas.map((inputDatas, index) => {
        const { inputType } = inputDatas;
        switch (inputType) {
          case 'normal': {
            const { input } = inputDatas;
            return (
              <InputFiled<CheckoutFormDataType> key={input.id} input={input} />
            );
          }
          case 'group': {
            const { inputs } = inputDatas;
            return (
              <GroupedInputFields key={`${index}_inputs`}>
                {inputs.map((input) => (
                  <InputFiled<CheckoutFormDataType>
                    key={input.id}
                    input={input}
                  />
                ))}
              </GroupedInputFields>
            );
          }
          default:
            null;
        }
      })}
      <PrimaryButton onClick={handleSubmit} testId="nextStepBtn">
        make a purchase
      </PrimaryButton>
    </StepCurrStyled>
  );
};

export default Step3CurrInputFileds;
