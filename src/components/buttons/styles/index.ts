import { css, RuleSet } from 'styled-components';

import { Size, Variant } from 'src/@types/common';

export const IconButtonSizeStyles: Record<Size, RuleSet<object>> = {
  sm: css`
    width: 24px;
    height: 24px;
  `,

  md: css`
    width: 32px;
    height: 32px;
  `,

  lg: css`
    width: 44px;
    height: 44px;
  `,
};

export const PrimaryButtonVariantStyles: Record<Variant, RuleSet<object>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.black};

    color: ${({ theme }) => theme.colors.white};

    & path {
      fill: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgray};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.black};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.lightgray};

      color: ${({ theme }) => theme.colors.gray};

      & path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  `,

  secondary: css`
    border: 1px solid ${({ theme }) => theme.colors.black};

    background-color: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.black};

    & path {
      fill: ${({ theme }) => theme.colors.black};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};

      color: ${({ theme }) => theme.colors.white};

      & path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:active {
      border: 1px solid ${({ theme }) => theme.colors.black};

      background-color: ${({ theme }) => theme.colors.white};

      color: ${({ theme }) => theme.colors.black};

      & path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:disabled {
      border: 1px solid ${({ theme }) => theme.colors.gray};

      background-color: ${({ theme }) => theme.colors.white};

      color: ${({ theme }) => theme.colors.gray};

      & path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  `,

  tertiary: css`
    border: 1px solid ${({ theme }) => theme.colors.white};

    background-color: inherit;

    color: ${({ theme }) => theme.colors.white};

    & path {
      fill: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};

      color: ${({ theme }) => theme.colors.black};

      & path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.white};

      color: ${({ theme }) => theme.colors.black};

      & path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:disabled {
      border: 1px solid ${({ theme }) => theme.colors.lightgray};

      background-color: inherit;

      color: ${({ theme }) => theme.colors.gray};

      & path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  `,
};
