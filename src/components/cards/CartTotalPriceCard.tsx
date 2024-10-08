import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { changeKroeaPrice, totalPriceCalc } from '@utils/price';

interface CartTotalPriceCardProps {
  children: React.ReactNode;
}

const CartTotalPriceCard = ({ children }: CartTotalPriceCardProps) => {
  return (
    <CartTotalPriceCardWrapper>
      {children}
      <TotalPrice>
        {`${changeKroeaPrice(totalPriceCalc())}`} <Unit> KRW</Unit>
      </TotalPrice>
    </CartTotalPriceCardWrapper>
  );
};

const CartTotalPriceCardWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}
`;

const TotalPrice = styled.span`
  ${({ theme }) => theme.typography.Heading5}
`;

const Unit = styled.span`
  ${({ theme }) => theme.typography.Heading6}
`;
export default CartTotalPriceCard;
