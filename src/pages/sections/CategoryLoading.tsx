import styled from 'styled-components';

import PrimaryCardSkeleton from '@components/skeletons/PrimaryCardSkeleton';
import TitleCardSkeleton from '@components/skeletons/TitleCardSkeleton';

const CategoryLoadingWrapper = styled.div``;

const LoadingCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({theme}) => theme.colors.black};
  }
`;

const CategoryLoading = () => {
  return (
    <CategoryLoadingWrapper>
      <TitleCardSkeleton />
      <LoadingCardList>
        {Array.from({length: 6}).map((_, index) => (
          <PrimaryCardSkeleton key={index} />
        ))}
      </LoadingCardList>
    </CategoryLoadingWrapper>
  );
};

export default CategoryLoading;
