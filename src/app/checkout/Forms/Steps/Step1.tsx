import Step1CurrInputFileds from '@app/checkout/_components/Step1CurrInputFileds';
import StepDone from '@app/checkout/_components/StepDone';
import StepPending from '@app/checkout/_components/StepPending';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';

const Step1 = () => {
  const {
    state: {firstStep},
  } = useCheckoutStep();

  return (
    <>
      {firstStep.state === 'pending' && <StepPending step="firstStep" />}
      {firstStep.state === 'curr' && <Step1CurrInputFileds />}
      {firstStep.state === 'done' && <StepDone step="firstStep" />}
    </>
  );
};

export default Step1;
