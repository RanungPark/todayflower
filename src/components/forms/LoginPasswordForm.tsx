import {useMutation} from '@tanstack/react-query';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import DefaultTextField from '@components/textfields/DefaultTextField';
import {loginDone} from '@constants/toast';
import type {loginStateType} from '@pages/LoginPage';
import {useUserStore} from '@store/userStore';
import {mixins} from '@styles/Mixin';
import {fetchJoin} from '@utils/api';

interface LoginPasswordFormProps {
  onSubmit: (e: loginStateType) => void;
  username: string;
  loginCurrState: loginStateType;
}

interface LoginPasswordFormType {
  password: string;
}

const LoginPasswordFormWrapper = styled.div`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 32px;

  width: 100%;
`;

const LoginPasswordForm = ({onSubmit, username, loginCurrState}: LoginPasswordFormProps) => {
  const [join, setJoin] = useState(true);

  const {register, handleSubmit} = useForm<LoginPasswordFormType>();
  const navigate = useNavigate();
  const {login} = useUserStore();

  const LoginPasswordMutation = useMutation({
    mutationFn: (password: string) => fetchJoin(username, password, loginCurrState),
    onSuccess: (data) => {
      const loginUser = {
        id: data.id,
        username: data.username,
      };
      onSubmit('done');
      login(loginUser);
      setJoin(true);
      navigate(-1);
      loginDone();
    },
    onError: () => {
      setJoin(false);
      throw new Error('Login failed');
    },
  });

  const onJoinValid = ({password}: LoginPasswordFormType) => {
    LoginPasswordMutation.mutate(password);
  };

  return (
    <LoginPasswordFormWrapper onSubmit={handleSubmit(onJoinValid)}>
      <DefaultTextField
        inputState={join ? undefined : 'error'}
        hasLabel
        label="비밀번호를 입렵해주세요"
        hasHelpMessage
        helpMessage={join ? undefined : '로그인을 실패 하였습니다.'}
        helpTestId="passwordHelp"
      >
        <input
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
          placeholder="비밀번호를 입력해주세요"
          type="password"
          aria-label="password"
          data-cy="passwordInput"
        />
      </DefaultTextField>
      <PrimaryButton testId="passwordBtn" onClick={handleSubmit(onJoinValid)}>
        continue
      </PrimaryButton>
    </LoginPasswordFormWrapper>
  );
};

export default LoginPasswordForm;
