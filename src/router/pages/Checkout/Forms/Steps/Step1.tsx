import { useCheckoutStep } from '@contexts/CheckoutStepContext';

import Step1CurrInputFileds from '../../components/Step1CurrInputFileds';
import StepDone from '../../components/StepDone';
import StepPending from '../../components/StepPending';

const Step1 = () => {
  const {
    state: { firstStep },
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
