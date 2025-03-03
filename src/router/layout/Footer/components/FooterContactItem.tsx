import styled from 'styled-components';

interface FooterContactItemProps {
  title: string;
  children: React.ReactNode;
}

const FooterContactItem = ({ title, children }: FooterContactItemProps) => {
  return (
    <FooterContactItemWrapper>
      <Title>{title}</Title>
      {children}
    </FooterContactItemWrapper>
  );
};

const FooterContactItemWrapper = styled.li`
  ${({ theme }) => theme.typography.Links}
  margin-bottom: 24px;
`;

const Title = styled.h6`
  ${({ theme }) => theme.typography.Caption}
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.gray};
  text-transform: capitalize;
`;

export default FooterContactItem;
