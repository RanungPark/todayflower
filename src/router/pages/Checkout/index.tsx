import styled from 'styled-components';

import { CheckoutStepProvider } from '@contexts/CheckoutStepContext';

import Indicator from './components/Indicator';
import Summary from './components/Summary';
import Forms from './Forms';

const Checkout = () => {
  return (
    <CheckoutPagetWrapper>
      <Summary />
      <CheckoutStepProvider>
        <Indicator />
        <Forms />
      </CheckoutStepProvider>
    </CheckoutPagetWrapper>
  );
};

const CheckoutPagetWrapper = styled.section`
  padding-bottom: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Checkout;
