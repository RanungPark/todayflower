import { css } from 'styled-components';

export const defalutStyle = css`
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:focus-within {
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.colors.gray}`};
  }

  & path {
    fill: ${({ theme }) => theme.colors.black};
  }

  & button {
    cursor: pointer;
  }
`;

export const disabledStyle = css`
  background-color: ${({ theme }) => theme.colors.extralight};

  pointer-events: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
  }

  &:focus-within {
    box-shadow: 0 0 0;
  }

  & path {
    fill: ${({ theme }) => theme.colors.lightgray};
  }

  & button {
    pointer-events: none;
  }
`;
