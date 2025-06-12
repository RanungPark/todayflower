import {useParams} from 'react-router';
import styled from 'styled-components';

import {imgOptimization} from '@utils/img';
import {useCategoryTitle} from '@hooks/queries/useCategoryTitle';
import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

import BackgroundImageCard from './BackgroundImageCard';

const CategoryTitleWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
  width: 100%;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    height: 500px;
    border-bottom: none;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    height: 420px;
  }
`;

const CategoryTitle = () => {
  const {categoryName} = useParams();

  const {data} = useCategoryTitle(categoryName!);

  const {title, imgPath} = data;

  return (
    <CategoryTitleWrapper>
      <BackgroundImageCard imgPath={imgPath + imgOptimization({width: 800, height: 800})}>{title}</BackgroundImageCard>
    </CategoryTitleWrapper>
  );
};

export default CategoryTitle;
