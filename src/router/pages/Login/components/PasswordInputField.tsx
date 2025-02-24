import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import InputFiled from '@components/inputField';
import { loginDone } from '@constants/toast';
import { useLoginStep } from '@contexts/LoginStepContext';
import { passwordInputData } from '@data/login';
import useJoinMutations from '@hooks/mutations/useJoinMutations';
import { useUserStore } from '@store/userStore';
import { mixins } from '@styles/Mixin';

import { LoginFormDataType } from '../Forms';

const PasswordInputField = () => {
  const { trigger, getValues, setError } = useFormContext<LoginFormDataType>();
  const navigate = useNavigate();
  const {
    state: { currentState },
  } = useLoginStep();
  const { login } = useUserStore();

  const onSuccess = (data: any) => {
    const loginUser = {
      id: data.id,
      username: data.username,
    };

    login(loginUser);
    navigate(-1);
    loginDone();
  };

  const onError = (error: any) => {
    setError('password', { message: '로그인을 실패 하였습니다.' });
    console.error('Join failed:', error);
  };

  const { mutate } = useJoinMutations(onSuccess, onError);

  const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await trigger('password');

    if (!isValid) return;

    const { phoneNum, password } = getValues();
    mutate({ username: phoneNum, password, type: currentState });
  };

  return (
    <PasswordInputFieldStyled>
      <InputFiled<LoginFormDataType>
        input={passwordInputData}
        helpTestId="passwordHelp"
      >
        비밀번호를 입렵해주세요
      </InputFiled>
      <PrimaryButton testId="phoneBtn" onClick={handleNextStep}>
        continue
      </PrimaryButton>
    </PasswordInputFieldStyled>
  );
};

const PasswordInputFieldStyled = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  width: 100%;
  gap: 32px;
`;

export default PasswordInputField;
