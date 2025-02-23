import { css } from 'styled-components';

export const InputFieldDoneStyles = {
  enabled: css`
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};

    & button path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  `,
  disabled: css`
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
    color: ${({ theme }) => theme.colors.gray};
  `,
};
