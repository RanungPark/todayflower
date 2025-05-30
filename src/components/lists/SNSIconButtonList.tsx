import styled from 'styled-components';

import IconButton from '@components/buttons/IconButton';
import {SNSIconDatas} from '@data/buttonDatas';
import {mixins} from '@styles/Mixin';

const SNSIconButtonListWrapper = styled.div`
  ${mixins.flexBox({justify: 'space-between'})}
`;

const SNSIconButtonList = () => {
  return (
    <SNSIconButtonListWrapper>
      {SNSIconDatas.map(({IconComponent, SNSName}, index) => (
        <IconButton key={index} IconComponent={IconComponent} ariaLabel={SNSName} />
      ))}
    </SNSIconButtonListWrapper>
  );
};

export default SNSIconButtonList;
