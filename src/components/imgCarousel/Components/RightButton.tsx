import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import IconButton from '@components/buttons/IconButton';
import { useImgCarousel } from '@contexts/ImgCarouselContext';

const RightButton = () => {
  const { handleRightButton } = useImgCarousel();

  return (
    <IconButton onClick={handleRightButton} aria-label="chevron right">
      <WChevronRight />
    </IconButton>
  );
};

export default RightButton;
