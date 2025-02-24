import { useFormContext } from 'react-hook-form';

import PrimaryButton from '@components/buttons/PrimaryButton';
import InputFiled from '@components/inputField';
import { useCheckoutStep } from '@contexts/CheckoutStepContext';
import { SelectBox } from '@contexts/SelectBoxContext';
import { Step2InputDatas } from '@data/checkout';

import { CheckoutFormDataType } from '../Forms';
import { GroupedInputFields, StepCurrStyled } from '../styles';

const Step2CurrInputFileds = () => {
  const { state, dispatch } = useCheckoutStep();
  const { trigger } = useFormContext<CheckoutFormDataType>();

  const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger([
      'recipientName',
      'recipientPhone',
      'street',
      'postalCode',
    ]);
    if (!isValid) return;

    dispatch({ type: 'STEP_DONE', step: 'secondStep' });
  };

  return (
    <StepCurrStyled>
      {state.secondStep.title}
      {Step2InputDatas.map((inputDatas, index) => {
        const { inputType } = inputDatas;
        switch (inputType) {
          case 'normal': {
            const { input } = inputDatas;
            return (
              <InputFiled<CheckoutFormDataType> key={input.id} input={input} />
            );
          }
          case 'datePicker': {
            return <></>;
          }
          case 'selectBox': {
            const { input, options } = inputDatas;

            return (
              <SelectBox>
                <SelectBox.label input={input} />
                <SelectBox.Options options={options} />
              </SelectBox>
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
      <PrimaryButton onClick={handleNextStep} testId="nextStepBtn">
        Continue to Payment
      </PrimaryButton>
    </StepCurrStyled>
  );
};

export default Step2CurrInputFileds;
