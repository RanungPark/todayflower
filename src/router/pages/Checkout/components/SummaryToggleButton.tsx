import styled from 'styled-components';

import { ReactComponent as ChevronDown } from '@assets/icons/wght300/ChevronDown.svg';
import { ReactComponent as ChevronUp } from '@assets/icons/wght300/ChevronUp.svg';
import { ReactComponent as WShoppingCart } from '@assets/icons/wght400/WShoppingCart.svg';
import IconButton from '@components/buttons/IconButton';
import { mixins } from '@styles/Mixin';

interface SummaryToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const SummaryToggleButton = ({ isOpen, onClick }: SummaryToggleButtonProps) => (
  <SummaryToggleButtonStyled onClick={onClick}>
    <IconButton aria-label="shopping cart">
      <WShoppingCart />
    </IconButton>
    Show order summary
    <IconButton aria-label={isOpen ? 'chevron up' : 'chevron down'}>
      {isOpen ? <ChevronUp /> : <ChevronDown />}
    </IconButton>
  </SummaryToggleButtonStyled>
);

const SummaryToggleButtonStyled = styled.div`
  ${({ theme }) => theme.typography.Heading6}
  ${mixins.flexBox({ justify: 'start' })}
  gap: 8px;

  cursor: pointer;
`;

export default SummaryToggleButton;
