import styled from 'styled-components';

import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

interface TitleCardProps {
  children: React.ReactNode;
}

const TitleCardWrapper = styled.h2`
  padding: 80px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    padding: 40px 16px;
  }
`;

const TitleCard = ({children}: TitleCardProps) => {
  return <TitleCardWrapper className="typography-h2">{children}</TitleCardWrapper>;
};

export default TitleCard;
