import InputFieldDone from '@components/inputFieldDone.tsx';
import { Step, useCheckoutStep } from '@contexts/CheckoutStepContext';

const StepPending = ({ step }: { step: Step }) => {
  const { state } = useCheckoutStep();

  return <InputFieldDone disabled={true}>{state[step].title}</InputFieldDone>;
};

export default StepPending;
