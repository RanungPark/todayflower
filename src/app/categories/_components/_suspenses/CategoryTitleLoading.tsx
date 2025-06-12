import styled from 'styled-components';

import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {BarCardSkeleton} from '@todayflower-public/ui';

const CategoryTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
  min-height: 50vh;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    height: 500px;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    height: 420px;
  }
`;
const CategoryTitleLoading = () => {
  return (
    <CategoryTitleWrapper>
      <BarCardSkeleton />
    </CategoryTitleWrapper>
  );
};

export default CategoryTitleLoading;
