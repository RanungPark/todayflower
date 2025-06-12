import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {BarCardSkeleton, ProductCardSkeleton} from '@todayflower-public/ui';

const ProductInfoSkeletonWrapper = styled.div`
  ${mixins.flexBox({direction: 'column', align: 'start'})};
  gap: 24px;

  width: 100%;
  padding: 40px;

  @media (max-width: ${700}px) {
    display: none;
  }
`;

const SecondaryCardSkeletonWrapper = styled.div`
  ${mixins.flexBox({justify: 'space-between'})}
  width: 100%;
`;

const ProductInfoSkeleton = () => {
  return (
    <ProductInfoSkeletonWrapper>
      <BarCardSkeleton width={600} height={50} />
      <BarCardSkeleton width={700} height={80} />
      <BarCardSkeleton width={300} height={60} />
      <BarCardSkeleton width={250} height={20} />
      <SecondaryCardSkeletonWrapper>
        {Array.from({length: 5}).map((v, i) => (
          <ProductCardSkeleton key={`${v}_${i}`} />
        ))}
      </SecondaryCardSkeletonWrapper>
      <BarCardSkeleton width={700} height={60} />
    </ProductInfoSkeletonWrapper>
  );
};

export default ProductInfoSkeleton;
