import { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import InputFiled from '@components/inputField';
import { REG_PHONE } from '@constants/reg';
import { useLoginStep } from '@contexts/LoginStepContext';
import useLoginIdMutations from '@hooks/mutations/useLoginIdMutations';
import { mixins } from '@styles/Mixin';

import { LoginFormDataType } from '../Forms';

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
        input={phoneNumInputFiled}
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

const phoneNumInputFiled: {
  id: keyof LoginFormDataType;
  type?: HTMLInputTypeAttribute;
  testId?: string;
  placeholder?: string;
  option?: RegisterOptions<LoginFormDataType>;
} = {
  id: 'phoneNum',
  placeholder: '+82 XXX XXX XXX',
  testId: 'phoneInput',
  option: {
    required: 'ID를 입력해주세요',
    pattern: {
      value: REG_PHONE,
      message: `'-' 없이 전화번호를 입력해주세요.`,
    },
  },
};

const PhonNumInputFieldStyled = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  width: 100%;
  gap: 32px;
`;

export default PhonNumInputField;
