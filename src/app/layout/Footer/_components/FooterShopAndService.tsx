import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {pageWait} from '@constants/toast';
import {mixins} from '@styles/Mixin';
import {shopDatas} from '@data/shop';
import {serviceDatas} from '@data/button';
import {TextButton} from '@todayflower-public/ui';

import FooterInfoTittle from './FooterInfoTittle';

const footerShopDatas = shopDatas.map(({id, children, url}) => {
  return {id, children, url};
});

const FooterShopAndServiceWrapper = styled.div`
  & > h5:nth-last-child(2) {
    margin-top: 24px;
  }
`;

const FooterTextButtonList = styled.ul`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 8px;
`;

const FooterShopAndService = () => {
  const navigate = useNavigate();

  const handleShopClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <FooterShopAndServiceWrapper>
      <FooterInfoTittle>shop</FooterInfoTittle>
      <FooterTextButtonList>
        {footerShopDatas.map(({id, children, url}) => (
          <TextButton key={id} onClick={handleShopClick(url)}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
      <FooterInfoTittle>service</FooterInfoTittle>
      <FooterTextButtonList>
        {serviceDatas.map((children) => (
          <TextButton key={children} onClick={pageWait}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
    </FooterShopAndServiceWrapper>
  );
};

export default FooterShopAndService;
