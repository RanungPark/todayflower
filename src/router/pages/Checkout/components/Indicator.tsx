import styled from 'styled-components';

import BreadCrumb from '@components/breadCrumb';
import { Step, useCheckoutStep } from '@contexts/CheckoutStepContext';
import { mixins } from '@styles/Mixin';

const Indicator = () => {
  const { state, dispatch } = useCheckoutStep();

  const currentStepIndex = Object.entries(state).findIndex(
    ([, value]) => value.state === 'curr',
  );

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
                dispatch({ type: 'STEP_CLICK', step: key as Step });
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

const IndicatorStyled = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px;

  width: 100%;
  padding: 40px 0 0 80px;
`;

export default Indicator;
