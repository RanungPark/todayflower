import React from 'react';
import styled from 'styled-components';

import TextButton, { TextButtonProps } from '@components/buttons/TextButton';
import { mixins } from '@styles/Mixin';

interface ActionCardProps {
  textButton: TextButtonProps;
  children: React.ReactNode;
  testId?: string;
}

const ActionCard = ({ children, testId, textButton }: ActionCardProps) => {
  return (
    <ActionCardWrapper data-cy={testId}>
      {children}
      <ButtonWrapper>
        <TextButton {...textButton}>{textButton.children}</TextButton>
      </ButtonWrapper>
    </ActionCardWrapper>
  );
};

const ActionCardWrapper = styled.div`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading3}
  position: relative;

  width: 100%;
  height: 384px;
  padding: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
`;

export default ActionCard;
