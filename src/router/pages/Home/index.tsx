import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { shopDatas } from '@data/shop';
import ActionCardAndImageCardList from '@router/pages/home/components/ActionCardAndImageCardList';

import HomeAbout from './components/HomeAbout';
import HomeMain from './components/HomeMain';

const Home = () => {
  const navigate = useNavigate();

  const handleShopClick = (url: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(url);
    };
  };

  return (
    <HomePageWrapper>
      <HomeMain />
      {shopDatas.map(({ children, imgPath, url }, index) => (
        <ActionCardAndImageCardList
          key={uuidv4()}
          onClick={handleShopClick(url)}
          index={index}
          buttonText="Shop now"
          imgPath={imgPath}
          alt={children}
          actionTestId={`action_${index}`}
          imgTestId={`img_${index}`}
        >
          {children.trim().replace(/\s+/g, '')}
        </ActionCardAndImageCardList>
      ))}
      <HomeAbout />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.main``;

export default Home;
