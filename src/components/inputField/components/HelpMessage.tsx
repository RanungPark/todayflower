import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckCircle } from '@assets/icons/wght300/CheckCircle.svg';
import { ReactComponent as CrossCircle } from '@assets/icons/wght300/CrossCircle.svg';
import { mixins } from '@styles/Mixin';
import { ValidationState } from 'src/@types/common';

import { HelpMessageStyles } from '../styles';

interface HelpMessageProps {
  children: React.ReactNode;
  validationState: ValidationState;
  testId?: string;
}

const HelpMessage = ({
  children,
  validationState = 'default',
  testId,
}: HelpMessageProps) => {
  return (
    <HelpMessageWrapper $validationState={validationState}>
      {validationState === 'error' && <CrossCircle aria-label="cross circle" />}
      {validationState === 'success' && (
        <CheckCircle aria-label="check circle" />
      )}
      <p data-cy={testId}>{children}</p>
    </HelpMessageWrapper>
  );
};

const HelpMessageWrapper = styled.div<{ $validationState: ValidationState }>`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.CaptionSmall};
  ${({ $validationState }) =>
    HelpMessageStyles[$validationState] || HelpMessageStyles.default};
  position: absolute;
  bottom: -20px;
  
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export default HelpMessage;
