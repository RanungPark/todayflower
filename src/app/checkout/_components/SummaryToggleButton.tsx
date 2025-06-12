import styled from 'styled-components';

import ChevronDown from '@assets/icons/wght300/ChevronDown.svg';
import ChevronUp from '@assets/icons/wght300/ChevronUp.svg';
import WShoppingCart from '@assets/icons/wght400/WShoppingCart.svg';
import {mixins} from '@styles/Mixin';
import {IconButton} from '@todayflower-public/ui';

interface SummaryToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const SummaryToggleButtonStyled = styled.div`
  ${mixins.flexBox({justify: 'start'})}
  gap: 8px;

  cursor: pointer;
`;

const SummaryToggleButton = ({isOpen, onClick}: SummaryToggleButtonProps) => (
  <SummaryToggleButtonStyled onClick={onClick} className="typography-h6">
    <IconButton src={WShoppingCart} aria-label="shopping cart" />
    Show order summary
    <IconButton src={isOpen ? ChevronUp : ChevronDown} aria-label={isOpen ? 'chevron up' : 'chevron down'} />
  </SummaryToggleButtonStyled>
);

export default SummaryToggleButton;
