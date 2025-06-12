import styled from 'styled-components';

import FooterInfoTittle from './FooterInfoTittle';
import FooterContactItem from './FooterContactItem';
import type {FooterContactItemType} from './FooterContact';

interface FooterContactListProps {
  children: string;
  contactItems: FooterContactItemType[];
}

const FooterContactListWrapper = styled.div``;

const Ul = styled.ul``;

const FooterContactList = ({children, contactItems}: FooterContactListProps) => {
  return (
    <FooterContactListWrapper>
      <FooterInfoTittle>{children}</FooterInfoTittle>
      <Ul>
        {contactItems.map(({id, title, children: itemChildren}) => (
          <FooterContactItem title={title} key={id}>
            {itemChildren}
          </FooterContactItem>
        ))}
      </Ul>
    </FooterContactListWrapper>
  );
};

export default FooterContactList;
