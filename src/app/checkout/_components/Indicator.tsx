import styled from 'styled-components';

import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';
import type {Step} from '@contexts/CheckoutStepContext';
import {useCheckoutStep} from '@contexts/CheckoutStepContext';
import {mixins} from '@styles/Mixin';
import {BreadCrumb} from '@todayflower-public/ui';

const IndicatorStyled = styled.div`
  ${mixins.flexBox({justify: 'start'})}
  gap: 16px;
  width: 100%;
  padding: 40px 80px;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    padding: 24px 16px;
  }
`;

const Indicator = () => {
  const {state, dispatch} = useCheckoutStep();

  const currentStepIndex = Object.entries(state).findIndex(([, value]) => value.state === 'curr');

  return (
    <IndicatorStyled>
      {Object.entries(state).map(([key, value], index) => {
        const isClickable = index <= currentStepIndex;

        return (
          <BreadCrumb
            key={key}
            focus={value.state === 'curr'}
            disabled={!isClickable}
            onClick={() => {
              if (isClickable) {
                dispatch({type: 'STEP_CLICK', step: key as Step});
              }
            }}
          >
            {value.sub}
          </BreadCrumb>
        );
      })}
    </IndicatorStyled>
  );
};

export default Indicator;
