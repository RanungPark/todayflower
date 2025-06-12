import styled from 'styled-components';

import {BarCardSkeleton} from '@todayflower-public/ui';
import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

import TabletProductInfoSkeleton from './TabletProductInfoSkeleton';
import MobileProductInfoSkeleton from './MobileProductInfoSkeleton';
import ProductInfoSkeleton from './ProductInfoSkeleton';

const ProductsLoadingWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);
  border-left: 1px solid ${({theme}) => theme.colors.black};
  border-right: 1px solid ${({theme}) => theme.colors.black};
  border-bottom: 1px solid ${({theme}) => theme.colors.black};

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Base = styled.div`
  display: block;
  padding: 40px;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    display: block;
    padding: 16px;
  }
`;

const ProductsLoading = () => {
  return (
    <ProductsLoadingWrapper>
      <Base>
        <BarCardSkeleton width={500} height={500} />
      </Base>
      <Mobile>
        <BarCardSkeleton width={300} height={300} />
      </Mobile>

      <ProductInfoSkeleton />
      <TabletProductInfoSkeleton />
      <MobileProductInfoSkeleton />
    </ProductsLoadingWrapper>
  );
};

export default ProductsLoading;
