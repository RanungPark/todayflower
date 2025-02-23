import { css, RuleSet } from 'styled-components';

import { ValidationState } from 'src/@types/common';

export const TextFieldStyles: Record<ValidationState, RuleSet<object>> = {
  default: css`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        border: 1px solid ${colors.lightgray};

        &:hover {
          border: 1px solid ${colors.gray};
        }

        &:focus {
          box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray};

          outline: none;

          &::placeholder {
            color: ${colors.lightgray};
          }
        }

        &:disabled {
          border: 1px solid ${colors.lightgray};

          background-color: ${colors.extralight};

          pointer-events: none;

          &::placeholder {
            color: ${colors.lightgray};
          }
        }

        &[value]:not([value='']) {
          border: 1px solid ${colors.black};
        }
      `;
    }}
  `,
  success: css`
    border: 1px solid ${({ theme }) => theme.colors.success};

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.success};

      color: ${({ theme }) => theme.colors.success};
    }
  `,
  error: css`
    border: 1px solid ${({ theme }) => theme.colors.error};

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.error};

      color: ${({ theme }) => theme.colors.error};
    }
  `,
};

export const HelpMessageStyles: Record<ValidationState, RuleSet<object>> = {
  default: css`
    color: ${({ theme }) => theme.colors.gray};

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  `,
  success: css`
    color: ${({ theme }) => theme.colors.success};

    & path {
      fill: ${({ theme }) => theme.colors.success};
    }
  `,
  error: css`
    color: ${({ theme }) => theme.colors.error};

    & path {
      fill: ${({ theme }) => theme.colors.error};
    }
  `,
};
