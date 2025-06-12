import type {Step} from '@contexts/CheckoutStepContext';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';
import {InputFieldDone} from '@todayflower-public/ui';

const StepDone = ({step}: {step: Step}) => {
  const {state, dispatch} = useCheckoutStep();

  return (
    <div style={{width: '100%'}}>
      <InputFieldDone
        input={<InputFieldDone.Input>{state[step].title}</InputFieldDone.Input>}
        onClick={() => dispatch({type: 'STEP_CLICK', step})}
      />
    </div>
  );
};

export default StepDone;
