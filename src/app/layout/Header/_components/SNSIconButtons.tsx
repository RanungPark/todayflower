import styled from 'styled-components';

import {SNSIconDatas} from '@data/button';
import {mixins} from '@styles/Mixin';
import {IconButton} from '@todayflower-public/ui';

const SNSIconButtonsStyled = styled.div`
  width: 100%;
  ${mixins.flexBox({justify: 'space-between'})}
`;

const SNSIconButtons = () => {
  return (
    <SNSIconButtonsStyled>
      {SNSIconDatas.map(({id, IconComponent, SNSName}) => (
        <IconButton src={IconComponent} key={id} aria-label={SNSName} />
      ))}
    </SNSIconButtonsStyled>
  );
};

export default SNSIconButtons;
