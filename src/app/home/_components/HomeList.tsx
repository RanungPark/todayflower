import styled from 'styled-components';

import {ActionCard, ImgCard, TextButton} from '@todayflower-public/ui';
import ArrowLeft from '@assets/icons/wght400/WArrowLeft.svg';
import ArrowRight from '@assets/icons/wght400/WArrowRight.svg';
import {MAX_DESKTOP_WIDTH, MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

export interface HomeListProps {
  index: number;
  onClick: (e: React.MouseEvent) => void;
  children: string;
  src: string;
  alt: string;
}

const HomeListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-right: 1px solid ${({theme}) => theme.colors.black};
  width: 720px;

  @media (max-width: ${MAX_DESKTOP_WIDTH}px) {
    width: 720px;
    max-width: 100%;
  }

  @media (max-width: ${1250}px) {
    width: 100%;
  }
`;

const ResponsiveActionCard = styled(ActionCard)`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1 / 1;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    max-width: 384px;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    max-width: 187px;
  }
`;

const ResponsiveImgCard = styled(ImgCard)`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1 / 1;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    max-width: 384px;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    max-width: 187px;
  }
`;

const HomeList = ({index, onClick, children, src, alt}: HomeListProps) => {
  if (index % 2 === 0) {
    return (
      <HomeListWrapper>
        <ResponsiveActionCard
          title={<ActionCard.title>{children}</ActionCard.title>}
          button={
            <TextButton onClick={onClick} rightIcon={ArrowRight}>
              Shop now
            </TextButton>
          }
        />

        <ResponsiveImgCard
          src={src}
          alt={alt}
          onClick={onClick}
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </HomeListWrapper>
    );
  } else {
    return (
      <HomeListWrapper>
        <ResponsiveImgCard
          src={src}
          alt={alt}
          onClick={onClick}
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        />

        <ResponsiveActionCard
          title={<ActionCard.title>{children}</ActionCard.title>}
          button={
            <TextButton onClick={onClick} rightIcon={ArrowLeft}>
              Shop now
            </TextButton>
          }
        />
      </HomeListWrapper>
    );
  }
};

export default HomeList;
