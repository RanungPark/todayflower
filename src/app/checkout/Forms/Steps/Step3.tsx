import Step3CurrInputFileds from '@app/checkout/_components/Step3CurrInputFileds';
import StepDone from '@app/checkout/_components/StepDone';
import StepPending from '@app/checkout/_components/StepPending';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';

const Step3 = () => {
  const {
    state: {thirdStep},
  } = useCheckoutStep();

  return (
    <>
      {thirdStep.state === 'pending' && <StepPending step="thirdStep" />}
      {thirdStep.state === 'curr' && <Step3CurrInputFileds />}
      {thirdStep.state === 'done' && <StepDone step="thirdStep" />}
    </>
  );
};

export default Step3;
