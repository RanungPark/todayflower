import styled from 'styled-components';

import FooterContactItem from '@components/texts/FooterContactItem';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import type {FooterContactItemType} from '@pages/sections/FooterContact';

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
        {contactItems.map(({title, children: contactItemsChildren}, index) => (
          <FooterContactItem title={title} key={index}>
            {contactItemsChildren}
          </FooterContactItem>
        ))}
      </Ul>
    </FooterContactListWrapper>
  );
};

export default FooterContactList;
