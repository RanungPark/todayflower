import { css } from 'styled-components';

import { mixins } from '@styles/Mixin';

export const dataPickerClassStyle = css`
  .react-datepicker-popper {
    left: 0;
  }

  .react-datepicker {
    position: absolute;
    top: 16px;
    left: auto;

    padding: 24px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 0;
  }

  .react-datepicker__header {
    width: 180px;
    padding: 0;
    border-bottom: none;
    border-radius: 0;

    background-color: ${({ theme }) => theme.colors.white};
  }

  .react-datepicker__aria-live {
    display: none;
  }

  .react-datepicker__day-names {
    ${({ theme }) => theme.typography.CaptionBold}
    ${mixins.flexBox({ justify: 'space-between' })}
    margin-top: 16px;
    padding: 0;

    .react-datepicker__day-name {
      ${mixins.flexBox({})}
      width: 24px;
      height: 24px;
      margin: 0;

      color: ${({ theme }) => theme.colors.gray};
    }
  }

  .react-datepicker__month {
    ${({ theme }) => theme.typography.CaptionBold}
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-top: 16px;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day {
    ${mixins.flexBox({})}
    width: 24px;
    height: 24px;
    margin: 0;

    &:hover {
      border-radius: 0;

      background-color: ${({ theme }) => theme.colors.lightgray};

      color: ${({ theme }) => theme.colors.black};
    }
  }

  .react-datepicker__day--selected {
    border-radius: 0;

    background-color: ${({ theme }) => theme.colors.black};

    color: ${({ theme }) => theme.colors.white};
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.colors.gray};
  }

  .react-datepicker__triangle {
    display: none;
  }
`;
