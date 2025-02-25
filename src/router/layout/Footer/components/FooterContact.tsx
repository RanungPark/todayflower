import styled from 'styled-components';

import SNSIconButtons from '@components/buttons/SNSIconButtons';
import FooterContactList from '@router/layout/Footer/components/FooterContactList';
import FooterInfoTittle from '@router/layout/Footer/components/FooterInfoTittle';

export interface FooterContactItemType {
  title: string;
  children: string;
}

const contactItems: FooterContactItemType[] = [
  { title: 'address', children: '경기도 시흥시 진말로 36번지' },
  { title: 'Phone', children: '01087971558' },
  { title: 'General Enquiry:', children: 'ckehfqkr302@gamil.com' },
];

const FooterContact = () => {
  return (
    <FooterContactWrapper>
      <FooterContactList contactItems={contactItems}>
        contact us
      </FooterContactList>
      <FooterInfoTittle>follow us</FooterInfoTittle>
      <SNSIconButtons />
    </FooterContactWrapper>
  );
};

const FooterContactWrapper = styled.div`
  padding: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default FooterContact;
