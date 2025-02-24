import React from 'react';
import styled from 'styled-components';

import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import { mixins } from '@styles/Mixin';

import { baseStyle, disabledStyle, focusStyle, notFocusStyle } from './styles';

interface BreadCrumbProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  focus?: boolean;
}

const BreadCrumb = ({ children, focus, ...props }: BreadCrumbProps) => {
  return (
    <BreadCrumbWrapper $focus={focus} {...props}>
      {children}
      <WChevronRight aria-label="chevron right" />
    </BreadCrumbWrapper>
  );
};

const BreadCrumbWrapper = styled.button<{
  $focus?: boolean;
}>`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.Overline}
  ${({ $focus }) => ($focus ? focusStyle : notFocusStyle)}
  ${({ disabled }) => (disabled ? disabledStyle : baseStyle)}
  font-weight: 700;
  text-transform: uppercase;
`;

export default BreadCrumb;
