import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {BarCardSkeleton, ProductCardSkeleton} from '@todayflower-public/ui';
import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

const ProductInfoSkeletonWrapper = styled.div`
  ${mixins.flexBox({direction: 'column', align: 'start'})};
  gap: 24px;

  width: 100%;
  padding: 40px;
  display: none;

  @media (max-width: ${700}px) {
    display: flex;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    display: none;
  }
`;

const SecondaryCardSkeletonWrapper = styled.div`
  ${mixins.flexBox({justify: 'space-between'})}
  width: 100%;
`;

const TabletProductInfoSkeleton = () => {
  return (
    <ProductInfoSkeletonWrapper>
      <BarCardSkeleton width={450} height={50} />
      <BarCardSkeleton width={550} height={80} />
      <BarCardSkeleton width={150} height={60} />
      <BarCardSkeleton width={100} height={20} />
      <SecondaryCardSkeletonWrapper>
        {Array.from({length: 3}).map((v, i) => (
          <ProductCardSkeleton key={`${v}_${i}`} />
        ))}
      </SecondaryCardSkeletonWrapper>
      <BarCardSkeleton width={550} height={60} />
    </ProductInfoSkeletonWrapper>
  );
};

export default TabletProductInfoSkeleton;
