import styled from 'styled-components';

import type {FooterContactItemType} from '@pages/sections/FooterContact';

const FooterContactItemWrapper = styled.li`
  ${({theme}) => theme.typography.Links}
  margin-bottom: 24px;
`;

const Title = styled.h6`
  ${({theme}) => theme.typography.Caption}
  margin-bottom: 8px;

  color: ${({theme}) => theme.colors.gray};
  text-transform: capitalize;
`;

const FooterContactItem = ({title, children}: FooterContactItemType) => {
  return (
    <FooterContactItemWrapper>
      <Title>{title}</Title>
      {children}
    </FooterContactItemWrapper>
  );
};

export default FooterContactItem;
