import { useNavigate } from 'react-router';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import { mixins } from '@styles/Mixin';

const Done = () => {
  const navigate = useNavigate();

  const goToMainPage = () => navigate('/');

  return (
    <DoneStyled>
      로그인이 완료되었습니다
      <PrimaryButton onClick={goToMainPage}>
        메인 페이지로 돌아가기
      </PrimaryButton>
    </DoneStyled>
  );
};

const DoneStyled = styled.div`
  ${mixins.flexBox({ direction: 'column', justify: 'space-evenly' })}
  ${({ theme }) => theme.typography.Heading5}
  width: 100%;
  height: 55vh;
  margin: 0 auto;
  padding: 80px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Done;
