import {useNavigate, useParams} from 'react-router';
import styled from 'styled-components';

import {imgOptimization} from '@utils/img';
import {ImgCard} from '@todayflower-public/ui';
import {useCategoryProducts} from '@hooks/queries/useCategoryProducts';
import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

const CategoryProductsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryProducts = () => {
  const {categoryName} = useParams();
  const navigate = useNavigate();

  const {data: products} = useCategoryProducts(categoryName!);

  return (
    <CategoryProductsWrapper>
      {products.map(({id, name, price, imgPath}) => (
        <ImgCard
          key={id}
          src={imgPath + imgOptimization({width: 500, height: 500})}
          alt={name}
          label={<ImgCard.Label>{name}</ImgCard.Label>}
          price={<ImgCard.Price>{price}</ImgCard.Price>}
          onClick={() => navigate(`products/${id}`)}
        />
      ))}
    </CategoryProductsWrapper>
  );
};

export default CategoryProducts;
