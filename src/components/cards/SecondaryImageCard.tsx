import { mixins } from '@styles/Mixin';
import { changeKroeaPrice } from '@utils/price';
import styled from 'styled-components';

interface SecondaryImageCardProps {
  imgPath: string;
  alt: string;
  price: number;
  children: string;
  onClick: (e: React.MouseEvent) => void;
}

const SecondaryImageCard = ({
  imgPath,
  alt,
  price,
  children,
  onClick,
}: SecondaryImageCardProps) => {
  return (
    <SecondaryImageCardWrapper onClick={onClick}>
      <SecondaryImageCardImg alt={alt} src={imgPath} />
      <SecondaryImageCardTextWrapper>
        {children}
        <SecondaryImageCardPriceWrapper>
          {changeKroeaPrice(price)}
        </SecondaryImageCardPriceWrapper>
      </SecondaryImageCardTextWrapper>
    </SecondaryImageCardWrapper>
  );
};

const SecondaryImageCardWrapper = styled.div`
  width: 100px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SecondaryImageCardImg = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  width: 100px;
  height: 100px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const SecondaryImageCardTextWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Caption}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 8px;
  gap: 4px;
`;

const SecondaryImageCardPriceWrapper = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export default SecondaryImageCard;
