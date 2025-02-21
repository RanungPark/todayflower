import { css, RuleSet } from 'styled-components';

import { ButtonSize } from 'src/@types/button';

export const sizeStyles: Record<ButtonSize, RuleSet<object>> = {
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
