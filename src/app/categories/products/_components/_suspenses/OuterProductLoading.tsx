import styled from 'styled-components';

import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';
import {mixins} from '@styles/Mixin';
import {BarCardSkeleton, ImgCardSkeleton} from '@todayflower-public/ui';

const Wrapper = styled.div`
  border-right: 1px solid ${({theme}) => theme.colors.black};
`;

const SubSkeletonWrapper = styled.div`
  ${mixins.flexBox({})}
  padding: 64px;
  border-left: 1px solid ${({theme}) => theme.colors.black};
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
`;

const LoadingCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const OuterProductLoading = () => {
  return (
    <Wrapper>
      <SubSkeletonWrapper>
        <BarCardSkeleton width={300} height={45} />
      </SubSkeletonWrapper>

      <LoadingCardList>
        {Array.from({length: 6}).map((v, i) => (
          <ImgCardSkeleton key={`${v}_${i}`} />
        ))}
      </LoadingCardList>
    </Wrapper>
  );
};

export default OuterProductLoading;
