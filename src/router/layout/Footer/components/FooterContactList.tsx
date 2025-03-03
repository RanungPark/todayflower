import styled from 'styled-components';

import FooterContactItem from '@router/layout/footer/components/FooterContactItem';
import FooterInfoTittle from '@router/layout/footer/components/FooterInfoTittle';

import { FooterContactItemType } from './FooterContact';

interface FooterContactListProps {
  children: string;
  contactItems: FooterContactItemType[];
}

const FooterContactList = ({
  children,
  contactItems,
}: FooterContactListProps) => {
  return (
    <FooterContactListWrapper>
      <FooterInfoTittle>{children}</FooterInfoTittle>
      <Ul>
        {contactItems.map(({ id, title, children }) => (
          <FooterContactItem title={title} key={id}>
            {children}
          </FooterContactItem>
        ))}
      </Ul>
    </FooterContactListWrapper>
  );
};

const FooterContactListWrapper = styled.div``;

const Ul = styled.ul``;

export default FooterContactList;
