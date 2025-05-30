import styled from 'styled-components';

import TextButton from '@components/buttons/TextButton';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import {pageWait} from '@constants/toast';
import {aboutDatas} from '@data/buttonDatas';
import {mixins} from '@styles/Mixin';

const FooterAboutWrapper = styled.div`
  padding: 40px;
`;

const FooterTextButtonList = styled.ul`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 8px;
`;

const FooterAbout = () => {
  return (
    <FooterAboutWrapper>
      <FooterInfoTittle>service</FooterInfoTittle>
      <FooterTextButtonList>
        {aboutDatas.map((children, index) => (
          <TextButton key={index} onClick={pageWait}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
    </FooterAboutWrapper>
  );
};

export default FooterAbout;
