import styled from 'styled-components';

import TextButton, { TextButtonProps } from '@components/buttons/TextButton';
import { mixins } from '@styles/Mixin';
import { changeKroeaPrice } from '@utils/price';

interface CartItemProps {
  children: React.ReactNode;
  price: number;
  quantity: number;
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  textButton?: TextButtonProps;
  testId?: string;
}

const CartItem = ({
  children,
  price,
  quantity,
  img,
  textButton,
  testId,
}: CartItemProps) => {
  return (
    <CartItemPropsWrapper data-cy={testId}>
      <Img {...img} />
      <CartItemInfosWrapper>
        <Name>{children}</Name>
        <Quantity>{`Quantity (${quantity})`}</Quantity>
        {textButton && (
          <Price>
            {`${changeKroeaPrice(price)}`} <Unit>KRW</Unit>
          </Price>
        )}
      </CartItemInfosWrapper>
      {textButton ? (
        <TextButton {...textButton} testId="cartItemRemoveBtn">
          {textButton.children}
        </TextButton>
      ) : (
        <Price>
          {`${changeKroeaPrice(price)}`} <Unit>KRW</Unit>
        </Price>
      )}
    </CartItemPropsWrapper>
  );
};

const CartItemPropsWrapper = styled.li`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  object-fit: cover;
`;

const Name = styled.p``;
const Quantity = styled.p``;
const Price = styled.p``;

const Unit = styled.span`
  ${({ theme }) => theme.typography.Body}
`;

const CartItemInfosWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  flex: 1;
  gap: 8px;

  margin-left: 16px;

  & > p:nth-child(2) {
    ${({ theme }) => theme.typography.Body}
  }
`;

export default CartItem;
