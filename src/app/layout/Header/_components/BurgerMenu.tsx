import styled from 'styled-components';

import WClose from '@assets/icons/wght400/WClose.svg';
import {pageWait} from '@constants/toast';
import {zIndex} from '@constants/zIndex';
import {aboutDatas, menuDatas} from '@data/button';
import {mixins} from '@styles/Mixin';
import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';
import {IconButton, TextButton} from '@todayflower-public/ui';

import MenuButton from './MenuButton';
import SNSIconButtons from './SNSIconButtons';

interface BurgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BurgerMenuBackGround = styled.div`
  position: fixed;
  z-index: ${zIndex.bugerMenuBackGround};

  width: 768px;
  height: 100vh;
  border: 1px solid ${({theme}) => theme.colors.black};

  background-color: rgb(0 0 0 / 20%);

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    display: none;
  }
`;

const BurgerMenuWrapper = styled.div`
  position: fixed;
  z-index: ${zIndex.bugerMenu};

  width: 385px;
  height: 100vh;
  border: 1px solid ${({theme}) => theme.colors.black};

  background-color: ${({theme}) => theme.colors.white};

  @media (max-width: 390px) {
    width: 100%;
  }
`;

const TextButtonList = styled.ul`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 16px;

  padding: 24px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
`;

const BurgerMenuCloseButtonWrapper = styled.button`
  ${mixins.flexBox({justify: 'start'})}
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  cursor: pointer;
`;

const SMSIconButtonWrapper = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
`;

const BurgerMenu = ({open, setOpen}: BurgerMenuProps) => {
  const handleClose = () => setOpen(!open);

  return (
    <>
      <BurgerMenuBackGround onClick={handleClose} />
      <BurgerMenuWrapper>
        <BurgerMenuCloseButtonWrapper onClick={handleClose}>
          <IconButton src={WClose} width={32} height={32} aria-label="close" />
        </BurgerMenuCloseButtonWrapper>
        {menuDatas.map(({id, to, children}) => (
          <MenuButton to={to} onClick={handleClose} key={id}>
            {children}
          </MenuButton>
        ))}
        <TextButtonList>
          {aboutDatas.map((children, index) => (
            <TextButton key={`${children}_${index}`} onClick={pageWait}>
              {children}
            </TextButton>
          ))}
        </TextButtonList>
        <SMSIconButtonWrapper>
          <SNSIconButtons />
        </SMSIconButtonWrapper>
      </BurgerMenuWrapper>
    </>
  );
};

export default BurgerMenu;
