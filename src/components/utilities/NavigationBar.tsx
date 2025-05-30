import React from 'react';
import styled from 'styled-components';

import ShoppingBag from '@assets/icons/wght300/ShoppingBag.svg';
import WMenu from '@assets/icons/wght400/WMenu.svg';
import NavigationButton from '@components/buttons/NavigationButton';
import {mixins} from '@styles/Mixin';

interface NavigationBarProps {
  onMenuClick: (e: React.MouseEvent) => void;
  onCartClick: (e: React.MouseEvent) => void;
}

const NavigationBarWrapper = styled.header`
  ${mixins.flexBox({justify: 'space-between'})};
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  & > button:first-child {
    border-right: 1px solid ${({theme}) => theme.colors.black};
  }

  & > button:last-child {
    border-left: 1px solid ${({theme}) => theme.colors.black};
  }
`;

const NavigationBar = ({onMenuClick, onCartClick}: NavigationBarProps) => {
  return (
    <NavigationBarWrapper>
      <NavigationButton onClick={onMenuClick} hasIcon IconComponent={WMenu} ariaLabel="menu" testId="menuBtn" />
      <NavigationButton
        onClick={onCartClick}
        hasIcon
        IconComponent={ShoppingBag}
        ariaLabel="shopping bag"
        testId="cartBtn"
      />
    </NavigationBarWrapper>
  );
};

export default NavigationBar;
