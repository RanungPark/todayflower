import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {Button} from '@todayflower-public/ui';
import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

const NotFoundPageWrapper = styled.div`
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

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageWrapper className="typography-h5">
      요청하신 페이지를 찾을 수 없습니다.
      <Wrppaer>
        <Button onClick={() => navigate('/')} full>
          메인 페이지로 돌아가기
        </Button>
      </Wrppaer>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
