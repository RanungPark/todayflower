import styled from 'styled-components';

import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';
import {ImgCardSkeleton} from '@todayflower-public/ui';

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductsLoading = () => {
  return (
    <ProductsWrapper>
      {Array.from({length: 6}).map((v, i) => (
        <ImgCardSkeleton key={`${v}_${i}`} />
      ))}
    </ProductsWrapper>
  );
};

export default ProductsLoading;
