import {Suspense, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate, useParams} from 'react-router';

import {CATEGORIES_KEY} from '@constants/categorieskey';
import ErrorBoundary from '@components/ErrorBoundary';
import {MAX_TABLET_WIDTH} from '@constants/breakpoint';

import CategoryTitle from './_components/CategoryTitle';
import CategoryTitleError from './_components/_errors/CategoryTitleError';
import CategoryProducts from './_components/CategoryProducts';
import CategoryTitleLoading from './_components/_suspenses/CategoryTitleLoading';
import ProductError from './_components/_errors/ProductError';
import ProductsLoading from './_components/_suspenses/ProductsLoading';

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);
  border-right: 1px solid ${({theme}) => theme.colors.black};

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryPage = () => {
  const {categoryName} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!categoryName) {
      navigate('/error');
      return;
    }

    if (!CATEGORIES_KEY.includes(categoryName)) {
      navigate('/error');
    }
  }, [categoryName, navigate]);

  return (
    <Wrapper>
      <ErrorBoundary fallback={({reset}) => <CategoryTitleError reset={reset} />}>
        <Suspense fallback={<CategoryTitleLoading />}>
          <CategoryTitle />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={({reset}) => <ProductError reset={reset} />}>
        <Suspense fallback={<ProductsLoading />}>
          <CategoryProducts />
        </Suspense>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default CategoryPage;
