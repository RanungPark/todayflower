import InputFieldDone from '@components/inputFieldDone.tsx';
import { useLoginStep } from '@contexts/LoginStepContext';

import PasswordInputField from '../../components/PasswordInputField';

const Step2GetPW = () => {
  const {
    state: { currentState },
  } = useLoginStep();

  return (
    <div>
      {currentState === 'signin' && (
        <InputFieldDone disabled={true}>
          비밀번호를 입력해주세요.
        </InputFieldDone>
      )}
      {(currentState === 'join' || currentState === 'signup') && (
        <PasswordInputField />
      )}
    </div>
  );
};

export default Step2GetPW;
