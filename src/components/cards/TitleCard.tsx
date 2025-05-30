import styled from 'styled-components';

interface TitleCardProps {
  children: string;
}

const TitleCardWrapper = styled.h2`
  ${({theme}) => theme.typography.Heading2}
  padding: 80px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
`;

const TitleCard = ({children}: TitleCardProps) => {
  return <TitleCardWrapper>{children}</TitleCardWrapper>;
};

export default TitleCard;
