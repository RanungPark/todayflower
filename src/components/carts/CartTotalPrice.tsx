import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {changeKroeaPrice, totalPriceCalc} from '@utils/price';

interface CartTotalPriceProps {
  children: React.ReactNode;
}

const CartTotalPriceWrapper = styled.div`
  ${mixins.flexBox({justify: 'space-between'})}
`;

const CartTotalPrice = ({children}: CartTotalPriceProps) => {
  return (
    <CartTotalPriceWrapper className="typography-subtitle">
      {children}
      <span className="typography-h5">
        {`${changeKroeaPrice(totalPriceCalc())}`} <span className="typography-h6"> KRW</span>
      </span>
    </CartTotalPriceWrapper>
  );
};

export default CartTotalPrice;
