import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { shopDatas } from '@data/shop';
import HomeList from '@router/pages/home/components/HomeList';

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
      {shopDatas.map(({ id, children, src, url }, index) => (
        <HomeList
          key={id}
          onClick={handleShopClick(url)}
          index={index}
          buttonText="Shop now"
          src={src}
          alt={children}
          actionTestId={`action_${index}`}
          imgTestId={`img_${index}`}
        >
          {children.trim().replace(/\s+/g, '')}
        </HomeList>
      ))}
      <HomeAbout />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.main``;

export default Home;
