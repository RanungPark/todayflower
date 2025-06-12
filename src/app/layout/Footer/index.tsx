import styled from 'styled-components';

import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

import FooterAbout from './_components/FooterAbout';
import FooterContact from './_components/FooterContact';
import FooterRemind from './_components/FooterRemind';
import FooterShopAndService from './_components/FooterShopAndService';

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  border-right: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  & > div {
    border-right: 1px solid ${({theme}) => theme.colors.black};
    padding: 40px;
  }

  & > div:last-child {
    border-right: none;
  }

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    grid-template-columns: repeat(2, 1fr);

    & > div {
      border-right: none;
      padding: 40px 16px;
    }

    & > div:nth-child(odd) {
      border-right: 1px solid ${({theme}) => theme.colors.black};
    }

    & > div:nth-child(1),
    & > div:nth-child(2) {
      border-bottom: 1px solid ${({theme}) => theme.colors.black};
    }
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);

    & > div {
      border-bottom: 1px solid ${({theme}) => theme.colors.black};
      border-right: none;
    }

    & > div:nth-child(odd) {
      border-right: none;
    }

    & > div:last-child {
      border-bottom: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRemind />
      <FooterContact />
      <FooterShopAndService />
      <FooterAbout />
    </FooterWrapper>
  );
};

export default Footer;
