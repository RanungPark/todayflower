import styled from 'styled-components';

import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {pageWait} from '@constants/toast';
import {aboutUsData, chooseUsDatas} from '@data/textData';
import {Button} from '@todayflower-public/ui';

import TitleCard from './TitleCard';
import TextCard from './TextCard';

const HomeAboutWrapper = styled.article`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);

  & > div {
    border-right: 1px solid ${({theme}) => theme.colors.black};
  }

  & > h2 {
    border-left: 1px solid ${({theme}) => theme.colors.black};
    border-right: 1px solid ${({theme}) => theme.colors.black};
  }

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);

    & > div {
      border-left: 1px solid ${({theme}) => theme.colors.black};
    }
  }
`;

const HomeAboutTextCardAndButtonWrapper = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  & > div {
    border: none;
  }

  & > button {
    width: 175px;
    margin-bottom: 80px;
    margin-left: 80px;

    @media (max-width: ${MAX_MOBILE_WIDTH}px) {
      margin-bottom: 40px;
      margin-left: 16px;
    }
  }
`;

const HomeAbout = () => {
  return (
    <HomeAboutWrapper>
      <TitleCard>About us</TitleCard>

      <HomeAboutTextCardAndButtonWrapper>
        <TextCard label="our story" title={aboutUsData.title}>
          {aboutUsData.children}
        </TextCard>

        <Button onClick={pageWait} theme="secondary">
          lern more
        </Button>
      </HomeAboutTextCardAndButtonWrapper>

      <TitleCard>Why choose us ?</TitleCard>
      <div>
        {chooseUsDatas.map(({title, children}) => (
          <TextCard key={title} title={title}>
            {children}
          </TextCard>
        ))}
      </div>
    </HomeAboutWrapper>
  );
};

export default HomeAbout;
