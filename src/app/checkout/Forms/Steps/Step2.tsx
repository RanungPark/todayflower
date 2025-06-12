import Step2CurrInputFileds from '@app/checkout/_components/Step2CurrInputFileds';
import StepDone from '@app/checkout/_components/StepDone';
import StepPending from '@app/checkout/_components/StepPending';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';

const Step2 = () => {
  const {
    state: {secondStep},
  } = useCheckoutStep();

  return (
    <>
      {secondStep.state === 'pending' && <StepPending step="secondStep" />}
      {secondStep.state === 'curr' && <Step2CurrInputFileds />}
      {secondStep.state === 'done' && <StepDone step="secondStep" />}
    </>
  );
};

export default Step2;
