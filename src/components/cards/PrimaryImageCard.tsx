import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { changeKroeaPrice } from '@utils/price';

interface PrimaryImageCardProps {
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  price?: number;
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  testId?: string;
}

const PrimaryImageCard = ({
  img,
  price,
  children,
  onClick,
  testId,
}: PrimaryImageCardProps) => {
  return (
    <PrimaryImageCardWrapper onClick={onClick} data-cy={testId}>
      <Img {...img} />
      <Contents>
        {children}
        {price !== undefined && (
          <Price>{`Price: ${changeKroeaPrice(price)}`}</Price>
        )}
      </Contents>
    </PrimaryImageCardWrapper>
  );
};

const PrimaryImageCardWrapper = styled.div`
  ${mixins.flexBox({})}
  position: relative;

  width: 100%;
  height: ${768 / 2}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const Contents = styled.div`
  ${mixins.flexBox({ direction: 'column' })}
  ${({ theme }) => theme.typography.Heading6}
  position: absolute;
  bottom: 24px;
  gap: 4px;

  background-color: transparent;
`;

const Price = styled.p`
  ${({ theme }) => theme.typography.Caption}
  color: ${({ theme }) => theme.colors.gray};
`;

export default PrimaryImageCard;
