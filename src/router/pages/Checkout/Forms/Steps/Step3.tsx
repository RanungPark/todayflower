import { useCheckoutStep } from '@contexts/CheckoutStepContext';

import Step3CurrInputFileds from '../../components/Step3CurrInputFileds';
import StepDone from '../../components/StepDone';
import StepPending from '../../components/StepPending';

const Step3 = () => {
  const {
    state: { thirdStep },
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
