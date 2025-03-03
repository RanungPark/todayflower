import styled from 'styled-components';

import TextButton from '@components/buttons/TextButton';
import { pageWait } from '@constants/toast';
import { aboutDatas } from '@data/button';
import FooterInfoTittle from '@router/layout/footer/components/FooterInfoTittle';
import { mixins } from '@styles/Mixin';

const FooterAbout = () => {
  return (
    <FooterAboutWrapper>
      <FooterInfoTittle>service</FooterInfoTittle>
      <FooterTextButtonList>
        {aboutDatas.map((children) => (
          <TextButton key={children} onClick={pageWait}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
    </FooterAboutWrapper>
  );
};

const FooterAboutWrapper = styled.div`
  padding: 40px;
`;

const FooterTextButtonList = styled.ul`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 8px;
`;

export default FooterAbout;
