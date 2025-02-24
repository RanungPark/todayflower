import { css } from 'styled-components';

export const baseStyle = css`
  cursor: pointer;

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:active path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const focusStyle = css`
  color: ${({ theme }) => theme.colors.black};

  path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const notFocusStyle = css`
  color: ${({ theme }) => theme.colors.darkgray};

  path {
    fill: ${({ theme }) => theme.colors.darkgray};
  }
`;

export const disabledStyle = css`
  color: ${({ theme }) => theme.colors.gray};

  pointer-events: none;

  path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;
