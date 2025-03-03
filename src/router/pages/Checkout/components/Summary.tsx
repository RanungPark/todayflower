import { useState } from 'react';
import styled from 'styled-components';

import CartItems from '@components/carts/CartItems';
import CartTotalPrice from '@components/carts/CartTotalPrice';

import SummaryToggleButton from './SummaryToggleButton';

const Summary = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const handleClick = () => setIsOrderOpen((prev) => !prev);

  return (
    <SummaryStyled>
      <SummaryToggleButton isOpen={isOrderOpen} onClick={handleClick} />
      {isOrderOpen && <CartItems />}
      <CartTotalPrice>Total</CartTotalPrice>
    </SummaryStyled>
  );
};

const SummaryStyled = styled.div`
  padding: 40px 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.extralight};

  & li {
    padding: 24px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  }

  & > div:last-child {
    padding-top: 24px;
  }
`;

export default Summary;
