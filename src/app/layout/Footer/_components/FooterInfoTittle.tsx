import styled from 'styled-components';

interface FooterInfoTittleProps {
  children: string;
}

const FooterInfoTittleWrapper = styled.h5`
  margin-bottom: 24px;

  color: ${({theme}) => theme.colors.gray};
  text-transform: capitalize;
`;

const FooterInfoTittle = ({children}: FooterInfoTittleProps) => {
  return <FooterInfoTittleWrapper className="typography-h5">{children}</FooterInfoTittleWrapper>;
};

export default FooterInfoTittle;
