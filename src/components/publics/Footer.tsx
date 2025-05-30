import styled from 'styled-components';

import FooterAbout from '@pages/sections/FooterAbout';
import FooterContact from '@pages/sections/FooterContact';
import FooterRemind from '@pages/sections/FooterRemind';
import FooterShopAndService from '@pages/sections/FooterShopAndService';

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({theme}) => theme.colors.black};
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
