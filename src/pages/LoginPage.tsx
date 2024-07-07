import Buttons from '@components/common/Buttons';
import CompleteInput from '@components/common/CompleteInput';
import Text from '@components/common/Text';
import TextField from '@components/common/TextField';
import { useMutation } from '@tanstack/react-query';
import { fetchJoin, fetchLogin } from '@utils/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const LoginPage = () => {
  const [status, setStatus] = useState('404');

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const regPhone = /^010\d{8}$/;

  const LoginMutation = useMutation({
    mutationFn: (username: string) => fetchLogin(username),
    onSuccess: data => {
      const { message } = data;
      if (message === '로그인 진행') {
        setStatus('200');
      } else if (message === '회원가입 진행') {
        setStatus('202');
      }
    },
    onError: error => {
      console.error('Login failed:', error);
    },
  });

  const onLoginValid = (data: any) => {
    const { username } = data;
    LoginMutation.mutate(username);
  };

  return (
    <>
      {status === '404' ? (
        <LoginWrapper className="bb-1 bl-1 br-1 p-10">
          <Text as="h2" typography="Heading2">
            {'안녕하세요! 오늘의 꽃에 오신 것을 환영합니다.'}
          </Text>
          <StyledFrom
            className="mt-3 mb-3"
            onSubmit={handleSubmit(onLoginValid)}
          >
            <TextField
              label="휴대폰 번호를 사용하여 가입 또는 로그인하기"
              inputState={
                Object.keys(errors).length === 0 ? undefined : 'error'
              }
              textHelper={
                Object.keys(errors).length === 0
                  ? undefined
                  : errors.username?.message
              }
            >
              <input
                {...register('username', {
                  required: 'ID를 입력해주세요',
                  pattern: {
                    value: regPhone,
                    message: `'-' 없이 전화번호를 입력해주세요.`,
                  },
                })}
                placeholder="+82 XXX XXX XXX"
              />
            </TextField>
            <Buttons label="continue" buttonType="contained" />
          </StyledFrom>
        </LoginWrapper>
      ) : (
        <Join username={getValues().username} status={status} />
      )}
    </>
  );
};

const Join = ({ username, status }: { username: string; status: string }) => {
  const [join, setJoin] = useState(true);
  const type = status === '200' ? '로그인' : '회원가입';

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const JoinMutation = useMutation({
    mutationFn: (password: string) => fetchJoin(username, password, type),
    onSuccess: () => {
      setJoin(true);
      navigate(-1);
    },
    onError: error => {
      setJoin(false);
      console.error('Login failed:', error);
    },
  });

  const onJoinValid = (data: any) => {
    const { password } = data;
    JoinMutation.mutate(password);
  };

  return (
    <JoinWrapper className="bb-1 bl-1 br-1 p-10">
      {status === '200' ? (
        <Text as="h2" typography="Heading2">
          {'로그인을 진행해주세요!'}
        </Text>
      ) : (
        <Text as="h2" typography="Heading2">
          {'회원가입을 진행해주세요!'}
        </Text>
      )}
      <StyledFrom className="mt-3 mb-3" onSubmit={handleSubmit(onJoinValid)}>
        <CompleteInput label={username} />
        <TextField
          label="비밀번호를 입렵해주세요"
          inputState={join ? undefined : 'error'}
          textHelper={join ? undefined : '로그인을 실패 하였습니다.'}
        >
          <input
            {...register('password', {
              required: '비밀번호를 입력해주세요',
            })}
            placeholder="비밀번호를 입력해주세요"
          />
        </TextField>
        <Buttons label="continue" buttonType="contained" />
      </StyledFrom>
    </JoinWrapper>
  );
};

const LoginWrapper = styled.div`
  height: 720px;
`;

const JoinWrapper = styled(LoginWrapper)``;

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LoginPage;
