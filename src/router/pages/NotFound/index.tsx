import { useNavigate } from 'react-router';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import { mixins } from '@styles/Mixin';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageWrapper>
      요청하신 페이지를 찾을 수 없습니다.
      <PrimaryButton onClick={() => navigate('/')} style={{ width: '500px' }}>
        메인 페이지로 돌아가기
      </PrimaryButton>
    </NotFoundPageWrapper>
  );
};

const NotFoundPageWrapper = styled.div`
  ${mixins.flexBox({
    direction: 'column',
    justify: 'space-evenly',
  })}
  ${({ theme }) => theme.typography.Heading5}
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default NotFound;
