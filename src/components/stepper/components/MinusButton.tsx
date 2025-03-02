import { ReactComponent as Minus } from '@assets/icons/wght300/Minus.svg';
import IconButton from '@components/buttons/IconButton';
import { useStepper } from '@contexts/StepperContext';

const MinusButton = () => {
  const { handleMinusClick } = useStepper();

  return (
    <IconButton
      onClick={handleMinusClick}
      size="lg"
      aria-label="minusBtn"
      testId="minusBtn"
    >
      <Minus />
    </IconButton>
  );
};

export default MinusButton;
