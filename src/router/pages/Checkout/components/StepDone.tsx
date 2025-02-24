import InputFieldDone from '@components/inputFieldDone.tsx';
import { Step, useCheckoutStep } from '@contexts/CheckoutStepContext';

const StepDone = ({ step }: { step: Step }) => {
  const { state, dispatch } = useCheckoutStep();

  return (
    <InputFieldDone onClick={() => dispatch({ type: 'STEP_CLICK', step })}>
      {state[step].title}
    </InputFieldDone>
  );
};

export default StepDone;
