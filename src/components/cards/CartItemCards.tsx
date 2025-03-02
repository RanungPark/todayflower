import styled from 'styled-components';

import CartItemCard from '@components/cards/CartItemCard';
import { removeToCart } from '@constants/toast';
import { useCartStore } from '@store/cartStore';
import { imgOptimization } from '@utils/img';

interface CartItemCardsProps {
  hasTextButton?: boolean;
}

const CartItemCards = ({ hasTextButton = true }: CartItemCardsProps) => {
  const { carts, removeItem } = useCartStore();

  const handleRemoveClick =
    ({ category, id, name }: { category: string; id: number; name: string }) =>
    () => {
      removeItem(`${category}_${id}`);
      removeToCart(name);
    };

  return (
    <CartItemCardsWrapper>
      {carts.map(({ id, name, imgPath, price, quantity, category }) => (
        <CartItemCard
          key={id}
          img={{
            src: imgPath + imgOptimization({ width: 200, height: 200 }),
            alt: name,
          }}
          price={price}
          quantity={quantity}
          onClick={handleRemoveClick({ category, id, name })}
          hasTextButton={hasTextButton}
          testId={`cart_${category}_${id}`}
        >
          {name}
        </CartItemCard>
      ))}
    </CartItemCardsWrapper>
  );
};

const CartItemCardsWrapper = styled.ul``;

export default CartItemCards;
