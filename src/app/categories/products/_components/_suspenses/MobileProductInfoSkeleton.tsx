import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {BarCardSkeleton, ProductCardSkeleton} from '@todayflower-public/ui';
import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

const ProductInfoSkeletonWrapper = styled.div`
  ${mixins.flexBox({direction: 'column', align: 'start'})};
  gap: 24px;

  width: 100%;
  padding: 16px;
  display: none;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    display: flex;
  }
`;

const SecondaryCardSkeletonWrapper = styled.div`
  ${mixins.flexBox({justify: 'space-between'})}
  width: 100%;
`;

const MobileProductInfoSkeleton = () => {
  return (
    <ProductInfoSkeletonWrapper>
      <BarCardSkeleton width={200} height={40} />
      <BarCardSkeleton width={300} height={70} />
      <BarCardSkeleton width={150} height={50} />
      <BarCardSkeleton width={100} height={10} />
      <SecondaryCardSkeletonWrapper>
        <ProductCardSkeleton />
      </SecondaryCardSkeletonWrapper>
      <BarCardSkeleton width={300} height={50} />
    </ProductInfoSkeletonWrapper>
  );
};

export default MobileProductInfoSkeleton;
