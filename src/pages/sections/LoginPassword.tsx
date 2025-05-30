import styled from 'styled-components';

import LoginPasswordForm from '@components/forms/LoginPasswordForm';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import type {loginStateType} from '@pages/LoginPage';
import type {FormStateType} from 'src/@types/state';

interface LoginPasswordProps {
  loginState: FormStateType;
  onSubmit: (e: loginStateType) => void;
  username: string;
  loginCurrState: loginStateType;
}

interface LoginPasswordForm {
  password: string;
}

const LoginPasswordWrapper = styled.div``;

const LoginPassword = ({loginState, onSubmit, username, loginCurrState}: LoginPasswordProps) => {
  return (
    <LoginPasswordWrapper>
      {loginState === 'yet' && <CompleteTextFiled disabled>비밀번호를 입력해주세요.</CompleteTextFiled>}

      {loginState === 'curr' && (
        <LoginPasswordForm onSubmit={onSubmit} username={username} loginCurrState={loginCurrState} />
      )}
    </LoginPasswordWrapper>
  );
};

export default LoginPassword;
