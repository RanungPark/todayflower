import styled from 'styled-components';

import IconButton from '@components/buttons/IconButton';
import { SNSIconDatas } from '@data/button';
import { mixins } from '@styles/Mixin';

const SNSIconButtons = () => {
  return (
    <SNSIconButtonsStyled>
      {SNSIconDatas.map(({ id, IconComponent, SNSName }) => (
        <IconButton
          key={id}
          onClick={() => {
            console.log(`go to ${SNSName}`);
          }}
          aria-label={SNSName}
        >
          <IconComponent />
        </IconButton>
      ))}
    </SNSIconButtonsStyled>
  );
};

const SNSIconButtonsStyled = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
`;

export default SNSIconButtons;
