import { ReactComponent as WChevronLeft } from '@assets/icons/wght400/WChevronLeft.svg';
import IconButton from '@components/buttons/IconButton';
import { useImgCarousel } from '@contexts/ImgCarouselContext';

const LeftButton = () => {
  const { handleLeftButton } = useImgCarousel();

  return (
    <IconButton onClick={handleLeftButton} aria-label="chevron left">
      <WChevronLeft />
    </IconButton>
  );
};

export default LeftButton;
