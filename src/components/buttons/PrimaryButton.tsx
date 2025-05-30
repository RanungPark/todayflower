import styled, {css} from 'styled-components';

import ArrowLeft from '@assets/icons/wght300/ArrowLeft.svg';
import ArrowRight from '@assets/icons/wght300/ArrowRight.svg';
import {mixins} from '@styles/Mixin';

type PrimaryButtontheme = 'primary' | 'secondary' | 'tertiary';

interface PrimaryButtonProps {
  primaryButtontheme?: PrimaryButtontheme;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  CustomButton?: string;
  disabled?: boolean;
  ariaLabel?: string;
  testId?: string;
}

const buttonStyles = {
  primary: css`
    background-color: ${({theme}) => theme.colors.black};

    color: ${({theme}) => theme.colors.white};

    & path {
      fill: ${({theme}) => theme.colors.white};
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.darkgray};
    }

    &:active {
      background-color: ${({theme}) => theme.colors.black};
    }

    &:disabled {
      background-color: ${({theme}) => theme.colors.lightgray};

      color: ${({theme}) => theme.colors.gray};

      & path {
        fill: ${({theme}) => theme.colors.gray};
      }
    }
  `,
  secondary: css`
    border: 1px solid ${({theme}) => theme.colors.black};

    background-color: ${({theme}) => theme.colors.white};

    color: ${({theme}) => theme.colors.black};

    & path {
      fill: ${({theme}) => theme.colors.black};
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.black};

      color: ${({theme}) => theme.colors.white};

      & path {
        fill: ${({theme}) => theme.colors.white};
      }
    }

    &:active {
      border: 1px solid ${({theme}) => theme.colors.black};

      background-color: ${({theme}) => theme.colors.white};

      color: ${({theme}) => theme.colors.black};

      & path {
        fill: ${({theme}) => theme.colors.black};
      }
    }

    &:disabled {
      border: 1px solid ${({theme}) => theme.colors.gray};

      background-color: ${({theme}) => theme.colors.white};

      color: ${({theme}) => theme.colors.gray};

      & path {
        fill: ${({theme}) => theme.colors.gray};
      }
    }
  `,
  tertiary: css`
    border: 1px solid ${({theme}) => theme.colors.white};

    background-color: inherit;

    color: ${({theme}) => theme.colors.white};

    & path {
      fill: ${({theme}) => theme.colors.white};
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.white};

      color: ${({theme}) => theme.colors.black};

      & path {
        fill: ${({theme}) => theme.colors.black};
      }
    }

    &:active {
      background-color: ${({theme}) => theme.colors.white};

      color: ${({theme}) => theme.colors.black};

      & path {
        fill: ${({theme}) => theme.colors.black};
      }
    }

    &:disabled {
      border: 1px solid ${({theme}) => theme.colors.lightgray};

      background-color: inherit;

      color: ${({theme}) => theme.colors.gray};

      & path {
        fill: ${({theme}) => theme.colors.gray};
      }
    }
  `,
};

const PrimaryButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'primaryButtontheme',
})<{
  primaryButtontheme: PrimaryButtontheme;
}>`
  ${mixins.flexBox({})}
  ${({theme}) => theme.typography.Button}
  ${({primaryButtontheme}) => buttonStyles[primaryButtontheme] || buttonStyles.primary}
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

const PrimaryButton = ({
  onClick,
  children,
  primaryButtontheme = 'primary',
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
  disabled = false,
  ariaLabel,
  testId,
}: PrimaryButtonProps) => {
  const renderLeftIcon = () => {
    if (hasLeftIcon) {
      return CustomButton && ariaLabel ? (
        <CustomButton aria-label={ariaLabel} />
      ) : (
        <ArrowLeft aria-label="left arrow" />
      );
    }
    return null;
  };

  const renderRightIcon = () => {
    if (hasRightIcon) {
      return CustomButton && ariaLabel ? (
        <CustomButton aria-label={ariaLabel} />
      ) : (
        <ArrowRight aria-label="right arrow" />
      );
    }
    return null;
  };

  const renderIcon = (position: 'left' | 'right') => {
    if (position === 'left') {
      return renderLeftIcon();
    } else if (position === 'right') {
      return renderRightIcon();
    }
    return null;
  };

  return (
    <PrimaryButtonWrapper
      primaryButtontheme={primaryButtontheme}
      onClick={onClick}
      disabled={disabled}
      data-cy={testId}
    >
      {renderIcon('left')}
      {children}
      {renderIcon('right')}
    </PrimaryButtonWrapper>
  );
};

export default PrimaryButton;
