import React from 'react';
import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { Size } from 'src/@types/common';

import { IconButtonSizeStyles } from './styles';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
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

const IconButtonWrapper = styled.nav<{ $size: Size }>`
  ${mixins.flexBox({})}
  ${({ $size }) => IconButtonSizeStyles[$size]}
  cursor: pointer;
`;

export default IconButton;
