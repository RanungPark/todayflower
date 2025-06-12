import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import WClose from '@assets/icons/wght400/WClose.svg';
import CartItems from '@components/carts/CartItems';
import CartTotalPrice from '@components/carts/CartTotalPrice';
import {clearCart, loginFail} from '@constants/toast';
import {zIndex} from '@constants/zIndex';
import {useCartStore} from '@store/cartStore';
import {useUserStore} from '@store/userStore';
import {mixins} from '@styles/Mixin';
import {MAX_DESKTOP_WIDTH, MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {Button, IconButton} from '@todayflower-public/ui';

interface CartProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartBackGround = styled.div`
  position: fixed;
  z-index: ${zIndex.bugerMenuBackGround};

  max-width: 768px;
  width: 100%;
  height: 100vh;
  border: 1px solid ${({theme}) => theme.colors.black};

  background-color: rgb(0 0 0 / 20%);

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    display: none;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  flex-direction: column;

  position: fixed;
  top: 0;
  right: calc((100vw - ${MAX_DESKTOP_WIDTH}px) / 2 * 1);
  z-index: ${zIndex.cart};

  max-width: 768px;
  width: 100%;
  height: 100vh;
  border: 1px solid ${({theme}) => theme.colors.black};

  background-color: ${({theme}) => theme.colors.white};

  @media (max-width: ${MAX_DESKTOP_WIDTH}px) {
    right: 0;
  }

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    width: 100%;
  }
`;

const CartHeaderWrapper = styled.div`
  ${mixins.flexBox({justify: 'space-between'})}
  padding: 16px 40px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    padding: 16px;
  }
`;

const CartMainWrapper = styled.ul`
  overflow-y: auto;
  flex: 1;

  & li {
    padding: 40px;
    border-bottom: 1px solid ${({theme}) => theme.colors.black};
  }

  & li:last-child {
    border-bottom: none;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    & li {
      padding: 40px 16px;
    }
  }
`;

const EmptyCartMessage = styled.p`
  ${mixins.flexBox({})}
  height: 100%;
`;

const CartfooterWrapper = styled.div`
  & > div {
    padding: 40px;
    border-top: 1px solid ${({theme}) => theme.colors.black};
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    & > div {
      padding: 40px 16px;
    }
  }
`;

const ShippingNote = styled.p`
  padding: 20px;
  border-top: 1px solid ${({theme}) => theme.colors.black};

  text-align: center;
`;

const Cart = ({open, setOpen}: CartProps) => {
  const {carts} = useCartStore();
  const {isLoggedIn} = useUserStore();
  const navigate = useNavigate();

  const handleClose = () => setOpen(!open);

  const goToCheckoutPage = () => {
    if (isLoggedIn) {
      if (carts.length === 0) {
        clearCart();
      } else {
        setOpen(!open);
        navigate(`/checkout`);
      }
    } else {
      setOpen(!open);
      navigate(`/login`);
      loginFail();
    }
  };

  return (
    <>
      <CartBackGround onClick={handleClose} />
      <CartWrapper>
        <CartHeaderWrapper className="typography-h6">
          Shopping Cart
          <IconButton src={WClose} width={32} height={32} onClick={handleClose} aria-label="close" />
        </CartHeaderWrapper>
        <CartMainWrapper>
          {carts.length === 0 ? (
            <EmptyCartMessage className="typography-h5">장바구니가 비어있습니다</EmptyCartMessage>
          ) : (
            <CartItems />
          )}
        </CartMainWrapper>
        <CartfooterWrapper>
          <CartTotalPrice>Subtotal</CartTotalPrice>
          <ShippingNote className="typography-caption">
            배송비 및 세금은 결제 시 계산됩니다. 오늘의 꽃 내 무료 표준 배송
          </ShippingNote>
          <Button full onClick={goToCheckoutPage}>
            check out
          </Button>
        </CartfooterWrapper>
      </CartWrapper>
    </>
  );
};

export default Cart;
