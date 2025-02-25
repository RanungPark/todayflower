import { useState } from 'react';
import styled from 'styled-components';

import NavigationBar from '@router/layout/Header/components/NavigationBar';

import BurgerMenu from './components/BurgerMenu';
import Cart from './components/Cart';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleBurgerMenuOpen = () => setBurgerOpen((prev) => !prev);
  const handleCartOpen = () => setCartOpen((prev) => !prev);

  return (
    <HeaderWrapper>
      {burgerOpen && <BurgerMenu setOpen={setBurgerOpen} open={burgerOpen} />}
      {cartOpen && <Cart setOpen={setCartOpen} open={cartOpen} />}
      <NavigationBar
        onMenuClick={handleBurgerMenuOpen}
        onCartClick={handleCartOpen}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;
export default Header;
