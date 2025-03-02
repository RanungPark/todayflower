import { ReactComponent as Add } from '@assets/icons/wght300/Add.svg';
import IconButton from '@components/buttons/IconButton';
import { useStepper } from '@contexts/StepperContext';

const PlusButton = () => {
  const { handlePlusClick } = useStepper();

  return (
    <IconButton
      onClick={handlePlusClick}
      size="lg"
      aria-label="plusBtn"
      testId="plusBtn"
    >
      <Add />
    </IconButton>
  );
};

export default PlusButton;
