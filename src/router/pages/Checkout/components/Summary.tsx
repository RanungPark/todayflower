import { useState } from 'react';
import styled from 'styled-components';

import CartItemCards from '@components/cards/CartItemCards';
import CartTotalPriceCard from '@components/cards/CartTotalPriceCard';

import SummaryToggleButton from './SummaryToggleButton';

const Summary = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const handleClick = () => setIsOrderOpen((prev) => !prev);

  return (
    <SummaryStyled>
      <SummaryToggleButton isOpen={isOrderOpen} onClick={handleClick} />
      {isOrderOpen && <CartItemCards hasTextButton={false} />}
      <CartTotalPriceCard>Total</CartTotalPriceCard>
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
