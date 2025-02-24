import { useCheckoutStep } from '@contexts/CheckoutStepContext';

import Step2CurrInputFileds from '../../components/Step2CurrInputFileds';
import StepDone from '../../components/StepDone';
import StepPending from '../../components/StepPending';

const Step2 = () => {
  const {
    state: { secondStep },
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
