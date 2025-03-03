import styled from 'styled-components';

import { removeToCart } from '@constants/toast';
import { useCartStore } from '@store/cartStore';
import { imgOptimization } from '@utils/img';

import CartItem from './CartItem';

const CartItems = () => {
  const { carts, removeItem } = useCartStore();

  const handleRemoveClick =
    ({ category, id, name }: { category: string; id: number; name: string }) =>
    () => {
      removeItem(`${category}_${id}`);
      removeToCart(name);
    };

  return (
    <CartItemsWrapper>
      {carts.map(({ id, name, imgPath, price, quantity, category }) => (
        <CartItem
          key={id}
          img={{
            src: imgPath + imgOptimization({ width: 200, height: 200 }),
            alt: name,
          }}
          price={price}
          quantity={quantity}
          textButton={{
            onClick: () => handleRemoveClick({ category, id, name }),
            children: 'Remove',
          }}
          testId={`cart_${category}_${id}`}
        >
          {name}
        </CartItem>
      ))}
    </CartItemsWrapper>
  );
};

const CartItemsWrapper = styled.ul``;

export default CartItems;
