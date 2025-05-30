import {useNavigate} from 'react-router';
import styled from 'styled-components';

import TextButton from '@components/buttons/TextButton';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import {pageWait} from '@constants/toast';
import {serviceDatas} from '@data/buttonDatas';
import {shopDatas} from '@data/shopDatas';
import {mixins} from '@styles/Mixin';

const footerShopDatas = shopDatas.map(({children, url}) => {
  return {children, url};
});

const FooterShopAndServiceWrapper = styled.div`
  padding: 40px;

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
        {footerShopDatas.map(({children, url}, index) => (
          <TextButton key={index} onClick={handleShopClick(url)}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
      <FooterInfoTittle>service</FooterInfoTittle>
      <FooterTextButtonList>
        {serviceDatas.map((children, index) => (
          <TextButton key={index} onClick={pageWait}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
    </FooterShopAndServiceWrapper>
  );
};

export default FooterShopAndService;
