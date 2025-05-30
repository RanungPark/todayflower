import styled from 'styled-components';

import CartItemCard from '@components/cards/CartItemCard';
import {removeToCart} from '@constants/toast';
import {useCartStore} from '@store/cartStore';
import {imgOptimization} from '@utils/img';

interface CartItemCardListProps {
  hasTextButton?: boolean;
}

const CartItemCardListWrapper = styled.ul``;

const CartItemCardList = ({hasTextButton = true}: CartItemCardListProps) => {
  const {carts, removeItem} = useCartStore();

  const handleRemoveClick =
    ({category, id, name}: {category: string; id: number; name: string}) =>
    () => {
      removeItem(`${category}_${id}`);
      removeToCart(name);
    };

  return (
    <CartItemCardListWrapper>
      {carts.map(({id, name, imgPath, price, quantity, category}) => (
        <CartItemCard
          key={id}
          imgPath={imgPath + imgOptimization({width: 200, height: 200})}
          alt={name}
          price={price}
          quantity={quantity}
          onClick={handleRemoveClick({category, id, name})}
          hasTextButton={hasTextButton}
          testId={`cart_${category}_${id}`}
        >
          {name}
        </CartItemCard>
      ))}
    </CartItemCardListWrapper>
  );
};

export default CartItemCardList;
