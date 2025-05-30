import styled from 'styled-components';

interface FooterInfoTittleProps {
  children: string;
}

const FooterInfoTittleWrapper = styled.h5`
  ${({theme}) => theme.typography.Heading5}
  margin-bottom: 24px;

  color: ${({theme}) => theme.colors.gray};
  text-transform: capitalize;
`;

const FooterInfoTittle = ({children}: FooterInfoTittleProps) => {
  return <FooterInfoTittleWrapper>{children}</FooterInfoTittleWrapper>;
};

export default FooterInfoTittle;
