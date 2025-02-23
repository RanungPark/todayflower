import { useFormContext } from 'react-hook-form';

import InputFieldDone from '@components/inputFieldDone.tsx';
import { useLoginStep } from '@contexts/LoginStepContext';

import { LoginFormDataType } from '..';
import PhonNumInputField from '../../components/PhonNumInputField';

const Step1GetID = () => {
  const {
    state: { currentState },
    dispatch,
  } = useLoginStep();

  const { getValues } = useFormContext<LoginFormDataType>();

  return (
    <>
      {currentState === 'signin' && <PhonNumInputField />}
      {(currentState === 'join' || currentState === 'signup') && (
        <InputFieldDone
          onClick={() => dispatch({ type: 'GO_TO_SINGIN' })}
          buttonTestId="phoneEdit"
        >
          {getValues('phoneNum')}
        </InputFieldDone>
      )}
    </>
  );
};

export default Step1GetID;
