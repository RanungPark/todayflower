import SecondaryImageCard from '@components/cards/SecondaryImageCard';
import { useImgCarousel } from '@contexts/ImgCarouselContext';
import { imgOptimization } from '@utils/img';

const Img = () => {
  const { viewProducts, goToProduct } = useImgCarousel();

  return (
    <>
      {viewProducts.map(({ name, price, imgPath, category, id }) => (
        <SecondaryImageCard
          price={price}
          img={{
            src:
              imgPath +
              imgOptimization({ width: 100, height: 100, auto: ['format'] }),
            alt: name,
          }}
          onClick={goToProduct({ productId: id, productCategory: category })}
          key={id}
          testId={`${category}_${id}_CarouseBtn`}
        >
          {name}
        </SecondaryImageCard>
      ))}
    </>
  );
};

export default Img;
