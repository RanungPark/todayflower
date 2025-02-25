import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import InputFiled from '@components/inputField';
import { useLoginStep } from '@contexts/LoginStepContext';
import { phoneNumInputData } from '@data/login';
import useLoginIdMutations from '@hooks/mutations/useLoginIdMutations';
import { mixins } from '@styles/Mixin';

import { LoginFormDataType } from '../forms';

const PhonNumInputField = () => {
  const { trigger, getValues } = useFormContext<LoginFormDataType>();
  const { dispatch } = useLoginStep();

  const onSuccess = (data: any) => {
    const { message } = data;

    if (message === '로그인 진행') {
      dispatch({ type: 'GO_TO_JOIN' });
    } else if (message === '회원가입 진행') {
      dispatch({ type: 'GO_TO_SIGNUP' });
    }
  };

  const { mutate } = useLoginIdMutations(onSuccess);

  const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger('phoneNum');

    if (!isValid) return;

    const phoneNum = getValues('phoneNum');

    mutate(phoneNum);
  };

  return (
    <PhonNumInputFieldStyled>
      <InputFiled<LoginFormDataType>
        input={phoneNumInputData}
        helpTestId="phoneHelp"
      >
        휴대폰 번호를 사용하여 가입 또는 로그인하기
      </InputFiled>
      <PrimaryButton testId="phoneBtn" onClick={handleNextStep}>
        continue
      </PrimaryButton>
    </PhonNumInputFieldStyled>
  );
};

const PhonNumInputFieldStyled = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 32px;

  width: 100%;
`;

export default PhonNumInputField;
