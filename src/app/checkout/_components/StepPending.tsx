import type {Step} from '@contexts/CheckoutStepContext';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';
import {InputFieldDone} from '@todayflower-public/ui';

const StepPending = ({step}: {step: Step}) => {
  const {state} = useCheckoutStep();

  return (
    <div style={{width: '100%'}}>
      <InputFieldDone disabled input={<InputFieldDone.Input>{state[step].title}</InputFieldDone.Input>} />
    </div>
  );
};

export default StepPending;
