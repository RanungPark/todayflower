import styled from 'styled-components';

import {pageWait} from '@constants/toast';
import {mixins} from '@styles/Mixin';
import {aboutDatas} from '@data/button';
import {TextButton} from '@todayflower-public/ui';

import FooterInfoTittle from './FooterInfoTittle';

const FooterTextButtonList = styled.ul`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 8px;
`;

const FooterAbout = () => {
  return (
    <div>
      <FooterInfoTittle>service</FooterInfoTittle>
      <FooterTextButtonList>
        {aboutDatas.map((children) => (
          <TextButton key={children} onClick={pageWait}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
    </div>
  );
};

export default FooterAbout;
