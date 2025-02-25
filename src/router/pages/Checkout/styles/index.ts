import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

export const StepCurrStyled = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 24px;

  width: 100%;
`;

export const GroupedInputFields = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;
