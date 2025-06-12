import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {shopDatas} from '@data/shop';
import {MAX_TABLET_WIDTH} from '@constants/breakpoint';

import HomeMain from './_components/HomeMain';
import HomeList from './_components/HomeList';
import HomeAbout from './_components/HomeAbout';

const HomeMainWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopClick = (url: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(url);
    };
  };

  return (
    <main>
      <HomeMainWrapper>
        <HomeMain />
        <div>
          {shopDatas.map(({id, children, src, url}, index) => (
            <HomeList key={id} onClick={handleShopClick(url)} index={index} src={src} alt={children}>
              {children.trim().replace(/\s+/g, '')}
            </HomeList>
          ))}
        </div>
      </HomeMainWrapper>

      <HomeAbout />
    </main>
  );
};

export default HomePage;
