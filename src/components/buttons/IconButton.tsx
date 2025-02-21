import React from 'react';
import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { ButtonSize } from 'src/@types/button';

import { sizeStyles } from './styles';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  testId?: string;
  children: React.ReactNode;
}

const IconButton = ({
  size = 'sm',
  testId,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <IconButtonWrapper $size={size} data-cy={testId} {...props}>
      {children}
    </IconButtonWrapper>
  );
};

const IconButtonWrapper = styled.button<{ $size: ButtonSize }>`
  ${mixins.flexBox({})}
  ${({ $size }) => sizeStyles[$size]}
`;

export default IconButton;
