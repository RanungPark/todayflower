import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {useCategoryProducts} from '@hooks/queries/useCategoryProducts';
import {ImgCard} from '@todayflower-public/ui';
import {imgOptimization} from '@utils/img';
import ProductPreparing from '@assets/product_preparing.jpg';

interface GoToProductProps {
  productCategory: string;
  productId: number;
}

const OuterProductsWrapper = styled.article`
  border-right: 1px solid ${({theme}) => theme.colors.black};
`;

const OuterProductsTitle = styled.div`
  ${mixins.flexBox({})}
  padding: 64px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
`;

const OuterProductsList = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PreparingImg = styled.div`
  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    display: none;
  }
`;

const OuterProducts = ({outerKey}: {outerKey: string}) => {
  const navigate = useNavigate();

  const {data: products} = useCategoryProducts(outerKey);

  const goToProduct =
    ({productCategory, productId}: GoToProductProps) =>
    () => {
      navigate(`/categories/${productCategory}/products/${productId}`);
    };

  const preparingImg = Array.from({length: products.length % 4}, (_, index) => {
    return {id: index, imgPath: ProductPreparing};
  });

  return (
    <OuterProductsWrapper>
      <OuterProductsTitle className="typography-h4">You may also like…</OuterProductsTitle>
      <OuterProductsList>
        {products.map(({id, name, price, imgPath, category}) => (
          <ImgCard
            label={<ImgCard.Label>{name}</ImgCard.Label>}
            price={<ImgCard.Price>{price}</ImgCard.Price>}
            key={id}
            src={imgPath + imgOptimization({width: 500, height: 500})}
            alt={name}
            onClick={goToProduct({productId: id, productCategory: category})}
          />
        ))}
        {preparingImg.map(({imgPath, id}) => (
          <PreparingImg key={id}>
            <ImgCard src={imgPath + imgOptimization({width: 500, height: 500})} />
          </PreparingImg>
        ))}
      </OuterProductsList>
    </OuterProductsWrapper>
  );
};

export default OuterProducts;
