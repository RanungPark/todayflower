import React from 'react';
import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

import RenderIcon from './components/RenderIcon';

interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  CustomButton?: React.FC<React.SVGProps<SVGSVGElement>>;
  testId?: string;
}

const TextButton = ({
  children,
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
  testId,
  ...props
}: TextButtonProps) => {
  return (
    <TextButtonWrapper data-cy={testId} {...props}>
      <RenderIcon
        hasLeftIcon={hasLeftIcon}
        hasRightIcon={false}
        CustomButton={CustomButton}
      />
      {children}
      <RenderIcon
        hasLeftIcon={false}
        hasRightIcon={hasRightIcon}
        CustomButton={CustomButton}
      />
    </TextButtonWrapper>
  );
};

const TextButtonWrapper = styled.button`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Links}
  position: relative;
  gap: 4px;

  background-color: inherit;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover::after,
  &:active::after {
    position: absolute;
    bottom: -1px;
    left: 0;

    width: 100%;
    height: 0.5px;

    background-color: ${({ theme }) => theme.colors.black};

    content: '';
  }
`;

export default TextButton;
