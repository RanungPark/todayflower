import styled from 'styled-components';

import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

const TextCardWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 80px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    padding: 40px 16px;
  }
`;

const Label = styled.p`
  margin-bottom: 24px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
`;

interface TextCardProps {
  title: string;
  children: React.ReactNode;
  label?: string;
}

const TextCard = ({title, children, label = ''}: TextCardProps) => {
  return (
    <TextCardWrapper className="typography-body">
      {label && <Label className="typography-caption">{label}</Label>}
      <Title className="typography-h3">{title}</Title>
      {children}
    </TextCardWrapper>
  );
};

export default TextCard;
