import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {useUserStore} from '@store/userStore';

import LogoutButton from './_components/LogoutButton';
import LoginButton from './_components/LoginButton';

const LoginPageWrapper = styled.div`
  ${mixins.flexBox({
    direction: 'column',
    justify: 'space-evenly',
  })}
  width: 100%;
  height: calc(70vh - 85px);
  margin: 0 auto;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-right: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
`;

const Wrppaer = styled.div`
  width: 500px;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    width: 350px;
  }
  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    width: 200px;
  }
`;

const LoginPage = () => {
  const {user} = useUserStore();

  return (
    <LoginPageWrapper>
      <Wrppaer className="typography-h3">안녕하세요! 오늘의 꽃에 오신 것을 환영합니다.</Wrppaer>
      <Wrppaer>{user === null ? <LoginButton /> : <LogoutButton />}</Wrppaer>
    </LoginPageWrapper>
  );
};

export default LoginPage;
