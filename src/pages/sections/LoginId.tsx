import styled from 'styled-components';

import LoginIdForm from '@components/forms/LoginIdForm';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import type {loginStateType} from '@pages/LoginPage';
import type {FormStateType} from 'src/@types/state';

interface LoginIdProps {
  loginState: FormStateType;
  onSubmit: (e: loginStateType) => void;
  onClick: (e: React.MouseEvent) => void;
  setUsername: (e: string) => void;
  username: string;
}

const LoginIdWrapper = styled.div``;

const LoginId = ({loginState, onSubmit, onClick, setUsername, username}: LoginIdProps) => {
  return (
    <LoginIdWrapper>
      {loginState === 'curr' && <LoginIdForm onSubmit={onSubmit} setUsername={setUsername} />}
      {loginState === 'done' && (
        <CompleteTextFiled onClick={onClick} buttonTestId="phoneEdit">
          {username}
        </CompleteTextFiled>
      )}
    </LoginIdWrapper>
  );
};

export default LoginId;
