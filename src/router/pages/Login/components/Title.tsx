import styled from 'styled-components';

import { useLoginStep } from '@contexts/LoginStepContext';

const Title = () => {
  const {
    state: { currentState },
  } = useLoginStep();

  return (
    <TitleStyled data-cy="loginHelp">
      {currentState === 'signin' && (
        <>안녕하세요! 오늘의 꽃에 오신 것을 환영합니다.</>
      )}
      {currentState === 'join' && <>로그인을 진행해주세요</>}
      {currentState === 'signup' && <>회원가입을 진행해주세요</>}
    </TitleStyled>
  );
};

const TitleStyled = styled.h2`
  ${({ theme }) => theme.typography.Heading2}
`;

export default Title;
