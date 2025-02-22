import { ReactComponent as ArrowLeft } from '@assets/icons/wght300/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/wght300/ArrowRight.svg';

interface RenderIconProps {
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  CustomButton?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const RenderIcon = ({
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
}: RenderIconProps) => {
  return (
    <>
      {hasLeftIcon &&
        (CustomButton ? (
          <CustomButton aria-label="custom svg" />
        ) : (
          <ArrowLeft aria-label="left arrow" />
        ))}

      {hasRightIcon &&
        (CustomButton ? (
          <CustomButton aria-label="custom svg" />
        ) : (
          <ArrowRight aria-label="right arrow" />
        ))}
    </>
  );
};

export default RenderIcon;
