import styled from 'styled-components';

import {changeKroeaPrice} from '@utils/price';
import {TextButton} from '@todayflower-public/ui';
import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

interface CartItemProps {
  children: React.ReactNode;
  price: number;
  quantity: number;
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  textButton?: {
    onClick: () => void;
    children: React.ReactNode;
  };
}

const CartItemPropsWrapper = styled.li`
  display: flex;
  align-items: center;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid ${({theme}) => theme.colors.black};
  object-fit: cover;
`;

const InfosWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    align-items: end;
  }
`;

const CartItemInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    margin-left: 0px;
    margin-top: 8px;
  }
`;

const Name = styled.p``;
const Quantity = styled.p``;
const Price = styled.p``;

const CartItem = ({children, price, quantity, img, textButton}: CartItemProps) => {
  return (
    <CartItemPropsWrapper className="typography-subtitle">
      <Img {...img} />
      <InfosWrapper>
        <CartItemInfosWrapper>
          <Name>{children}</Name>
          <Quantity className="typography-body">{`Quantity (${quantity})`}</Quantity>
          {textButton && (
            <Price>
              {`${changeKroeaPrice(price)}`} <span className="typography-body">KRW</span>
            </Price>
          )}
        </CartItemInfosWrapper>
        {textButton ? (
          <TextButton {...textButton}>{textButton.children}</TextButton>
        ) : (
          <Price>
            {`${changeKroeaPrice(price)}`} <span className="typography-body">KRW</span>
          </Price>
        )}
      </InfosWrapper>
    </CartItemPropsWrapper>
  );
};

export default CartItem;
