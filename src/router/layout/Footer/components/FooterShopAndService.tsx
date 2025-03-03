import { useNavigate } from 'react-router';
import styled from 'styled-components';

import TextButton from '@components/buttons/TextButton';
import { pageWait } from '@constants/toast';
import { serviceDatas } from '@data/button';
import { shopDatas } from '@data/shop';
import FooterInfoTittle from '@router/layout/footer/components/FooterInfoTittle';
import { mixins } from '@styles/Mixin';

const footerShopDatas = shopDatas.map(({ id, children, url }) => {
  return { id, children, url };
});

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
        {footerShopDatas.map(({ id, children, url }) => (
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

const FooterShopAndServiceWrapper = styled.div`
  padding: 40px;

  & > h5:nth-last-child(2) {
    margin-top: 24px;
  }
`;

const FooterTextButtonList = styled.ul`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 8px;
`;

export default FooterShopAndService;
