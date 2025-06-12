import styled from 'styled-components';

interface FooterContactItemProps {
  title: string;
  children: React.ReactNode;
}

const FooterContactItemWrapper = styled.li`
  margin-bottom: 24px;
`;

const Title = styled.h6`
  margin-bottom: 8px;

  color: ${({theme}) => theme.colors.gray};
  text-transform: capitalize;
`;

const FooterContactItem = ({title, children}: FooterContactItemProps) => {
  return (
    <FooterContactItemWrapper className="typography-link">
      <Title className="typography-caption">{title}</Title>
      {children}
    </FooterContactItemWrapper>
  );
};

export default FooterContactItem;
