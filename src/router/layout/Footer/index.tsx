import styled from 'styled-components';

import FooterAbout from './components/FooterAbout';
import FooterContact from './components/FooterContact';
import FooterRemind from './components/FooterRemind';
import FooterShopAndService from './components/FooterShopAndService';

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

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default Footer;
