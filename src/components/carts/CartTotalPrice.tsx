import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { changeKroeaPrice, totalPriceCalc } from '@utils/price';

interface CartTotalPriceProps {
  children: React.ReactNode;
}

const CartTotalPrice = ({ children }: CartTotalPriceProps) => {
  return (
    <CartTotalPriceWrapper>
      {children}
      <TotalPrice>
        {`${changeKroeaPrice(totalPriceCalc())}`} <Unit> KRW</Unit>
      </TotalPrice>
    </CartTotalPriceWrapper>
  );
};

const CartTotalPriceWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}
`;

const TotalPrice = styled.span`
  ${({ theme }) => theme.typography.Heading5}
`;

const Unit = styled.span`
  ${({ theme }) => theme.typography.Heading6}
`;
export default CartTotalPrice;
