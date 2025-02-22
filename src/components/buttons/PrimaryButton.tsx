import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { Variant } from 'src/@types/common';

import RenderIcon from './components/RenderIcon';
import { PrimaryButtonVariantStyles } from './styles';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  CustomButton?: React.FC<React.SVGProps<SVGSVGElement>>;
  testId?: string;
}

const PrimaryButton = ({
  children,
  variant = 'primary',
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
  testId,
  ...props
}: PrimaryButtonProps) => {
  return (
    <PrimaryButtonWrapper $variant={variant} data-cy={testId} {...props}>
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
    </PrimaryButtonWrapper>
  );
};

const PrimaryButtonWrapper = styled.button<{
  $variant: Variant;
}>`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Button}
  ${({ $variant }) =>
    PrimaryButtonVariantStyles[$variant] || PrimaryButtonVariantStyles.primary}
  gap: 8px;

  width: 100%;
  height: 56px;
  padding: 16px 24px;

  text-transform: uppercase;

  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`;

export default PrimaryButton;
