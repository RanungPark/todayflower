import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';

import {GNB, NavButton, SVG} from '@todayflower-public/ui';
import {useResponsive} from '@hooks/useResponsive';
import {MAX_TABLET_WIDTH} from '@constants/breakpoint';
import ShoppingBag from '@assets/icons/wght300/ShoppingBag.svg';
import WMenu from '@assets/icons/wght400/WMenu.svg';

import BurgerMenu from './_components/BurgerMenu';
import Cart from './_components/Cart';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const isMatched = useResponsive(MAX_TABLET_WIDTH);

  useEffect(() => {
    if (!isMatched) {
      setBurgerOpen(false);
    }
  }, [isMatched]);

  const handleBurgerMenuOpen = () => setBurgerOpen((prev) => !prev);
  const handleCartOpen = () => setCartOpen((prev) => !prev);

  const navigate = useNavigate();

  return (
    <header>
      {burgerOpen && <BurgerMenu setOpen={setBurgerOpen} open={burgerOpen} />}
      {cartOpen && <Cart setOpen={setCartOpen} open={cartOpen} />}
      <GNB
        leftNav={
          <NavButton
            onClick={
              isMatched
                ? handleBurgerMenuOpen
                : () => {
                    navigate('/');
                  }
            }
            nav={isMatched ? <SVG src={WMenu} /> : <NavButton.TextButton>Shop</NavButton.TextButton>}
          />
        }
        rightNav={
          <NavButton
            onClick={handleCartOpen}
            nav={isMatched ? <SVG src={ShoppingBag} /> : <NavButton.TextButton>Cart</NavButton.TextButton>}
            isBorderRight={false}
            isBorderLeft={isMatched}
          />
        }
        leftNav2nd={
          !isMatched && (
            <NavButton
              onClick={() => {
                navigate('/contact');
              }}
              nav={<NavButton.TextButton>Contact</NavButton.TextButton>}
            />
          )
        }
        rightNav2nd={
          !isMatched && (
            <NavButton
              onClick={() => {
                navigate('/login');
              }}
              nav={<NavButton.TextButton>Sign in</NavButton.TextButton>}
              isBorderLeft
            />
          )
        }
      />
    </header>
  );
};

export default Header;
