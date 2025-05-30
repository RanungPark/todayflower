import React from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import ActionCardAndImageCardList from '@components/lists/ActionCardAndImageCardList';
import {shopDatas} from '@data/shopDatas';
import HomeAbout from '@pages/sections/HomeAbout';
import HomeMain from '@pages/sections/HomeMain';

const HomePageWrapper = styled.main``;

const HomePage = () => {
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
      {shopDatas.map(({children, imgPath, url}, index) => (
        <ActionCardAndImageCardList
          key={index}
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

export default HomePage;
