import styled from 'styled-components';

import {fetchImgURL, imgOptimization} from '@utils/img';
import {MAX_DESKTOP_WIDTH, MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {Image} from '@todayflower-public/ui';

const HomeMainWrapper = styled.section`
  padding: 80px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
  width: 100%;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    border-right: 1px solid ${({theme}) => theme.colors.black};
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    padding: 16px;
  }
`;

const HomeMainTitle = styled.section`
  padding-bottom: 56px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
`;

const TitleText = styled.h1`
  padding-bottom: 16px;
`;

const HomeMainInfo = styled.section`
  display: flex;
  align-items: end;

  @media (max-width: ${MAX_DESKTOP_WIDTH}px) {
    flex-direction: column;
    align-items: start;
    gap: 32px;
  }

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    flex-direction: row;
    align-items: end;
    gap: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 32px;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 256px;
  margin-top: 32px;
  padding-right: 32px;
  border-right: 1px solid ${({theme}) => theme.colors.black};

  @media (max-width: ${MAX_DESKTOP_WIDTH}px) {
    border-right: none;
    width: 256px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${({theme}) => theme.colors.black};
  }

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    margin-top: 32px;
    padding-right: 32px;
    border-right: 1px solid ${({theme}) => theme.colors.black};

    max-width: 256px;
    padding-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: 600px) {
    border-right: none;
    width: 256px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${({theme}) => theme.colors.black};
  }
`;

const InfoSentence = styled.p`
  padding-left: 32px;
  min-width: 100px;

  @media (max-width: ${MAX_DESKTOP_WIDTH}px) {
    padding-left: 0;
  }
`;

const HomeMain = () => {
  return (
    <HomeMainWrapper>
      <HomeMainTitle className="typography-subtitle">
        <TitleText className="typography-h1">오늘의 꽃</TitleText>
        어떤 상황에도 어울리는 독특하게 제작된 부케와 선물을 찾아보세요. 온라인 꽃배달 서비스로 기쁨을 전하세요.
      </HomeMainTitle>
      <HomeMainInfo className="typography-caption">
        <ImgWrapper>
          <Image
            size="1:1"
            alt="Home title person img"
            src={fetchImgURL({category: 'others', name: 'home_rep'}) + imgOptimization({width: 300, height: 300})}
          />
        </ImgWrapper>

        <InfoSentence>
          모던한 오늘의 꽃에서 서비스의 기쁨을 경험하세요. 오늘 온라인으로 주문하고 신선한 꽃, 식물, 선물을 보내세요..
        </InfoSentence>
      </HomeMainInfo>
    </HomeMainWrapper>
  );
};

export default HomeMain;
