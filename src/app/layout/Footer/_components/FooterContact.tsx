import SNSIconButtons from '@app/layout/Header/_components/SNSIconButtons';
import FooterContactList from './FooterContactList';
import FooterInfoTittle from './FooterInfoTittle';

export interface FooterContactItemType {
  id: number;
  title: string;
  children: string;
}

const contactItems: FooterContactItemType[] = [
  {id: 1, title: 'address', children: '경기도 시흥시 진말로 36번지'},
  {id: 2, title: 'Phone', children: '01087971558'},
  {id: 3, title: 'General Enquiry:', children: 'ckehfqkr302@gamil.com'},
];

const FooterContact = () => {
  return (
    <div>
      <FooterContactList contactItems={contactItems}>contact us</FooterContactList>
      <FooterInfoTittle>follow us</FooterInfoTittle>
      <SNSIconButtons />
    </div>
  );
};

export default FooterContact;
