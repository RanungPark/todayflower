import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

const BackgroundImageCardWrapper = styled.h1<{$imgPath: string}>`
  ${mixins.flexBox({})}
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  position: absolute;

  background-image: linear-gradient(rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url(${({$imgPath}) => $imgPath});
  background-position: right 100% bottom 25%;
  background-repeat: no-repeat;
  background-size: cover;

  color: ${({theme}) => theme.colors.white};

  width: 100%;
  height: 720px;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    height: 500px;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    height: 420px;
  }
`;

interface BackgroundImageCardProps {
  imgPath: string;
  children: React.ReactNode;
}

const BackgroundImageCard = ({imgPath, children}: BackgroundImageCardProps) => {
  return (
    <BackgroundImageCardWrapper className="typography-h1" $imgPath={imgPath}>
      {children}
    </BackgroundImageCardWrapper>
  );
};

export default BackgroundImageCard;
