import styled from 'styled-components';

import {CheckoutStepProvider} from '@contexts/CheckoutStepContext';

import Summary from './_components/Summary';
import Indicator from './_components/Indicator';
import Forms from './Forms';

const CheckoutPagetWrapper = styled.section`
  padding-bottom: 80px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-right: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
`;

const CheckoutPage = () => {
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

export default CheckoutPage;
