import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import styled from 'styled-components';

import { ReactComponent as WChevronLeft } from '@assets/icons/wght400/WChevronLeft.svg';
import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import { mixins } from '@styles/Mixin';

interface HeaderProps extends ReactDatePickerCustomHeaderProps {}

const Header = ({
  date,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  decreaseMonth,
  increaseMonth,
}: HeaderProps) => {
  const formatDate = (d: Date): string => {
    const date = new Date(d);
    const header = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date);
    return `${header}`;
  };

  return (
    <HeaderStyled>
      <WChevronLeft
        aria-disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
      />
      {formatDate(date)}
      <WChevronRight
        aria-disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
      />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading6};
  gap: 16.5px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export default Header;
