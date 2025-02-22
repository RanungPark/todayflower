import React from 'react';
import styled, { css } from 'styled-components';

import { mixins } from '@styles/Mixin';

interface NavigationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  hasIcon?: boolean;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  testId?: string;
}

const NavigationButton = ({
  children,
  hasIcon = false,
  IconComponent,
  testId,
  ...props
}: NavigationButtonProps) => {
  return (
    <NavigationButtonWrapper $hasIcon={hasIcon} data-cy={testId} {...props}>
      {hasIcon && IconComponent ? <IconComponent /> : children}
    </NavigationButtonWrapper>
  );
};

const NavigationButtonWrapper = styled.button<{ $hasIcon?: boolean }>`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.Links};
  ${({ $hasIcon }) =>
    $hasIcon
      ? css`
          padding: 16px;
        `
      : css`
          padding: 32px 72px;
        `}
`;

export default NavigationButton;
