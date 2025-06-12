import {Suspense, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router';

import ErrorBoundary from '@components/ErrorBoundary';
import {CATEGORIES_KEY} from '@constants/categorieskey';
import {PRODUCT_MAX_KEY} from '@constants/productmaxkey';

import Product from './_components/Product';
import OuterProducts from './_components/OuterProducts';
import ProductsLoading from './_components/_suspenses/ProductsLoading';
import OuterProductLoading from './_components/_suspenses/OuterProductLoading';
import OuterProductError from './_components/_errors/OuterProductError';
import ProductInfoError from './_components/_errors/ProductInfoError';

const ProductsPage = () => {
  const {categoryName, productId} = useParams();
  const navigate = useNavigate();

  const filteredKeys = CATEGORIES_KEY.filter((key) => key !== categoryName);
  const outerKey = filteredKeys[Math.floor(Math.random() * filteredKeys.length)];

  useEffect(() => {
    if (!categoryName || !productId) {
      navigate('/error');
      return;
    }

    if (!CATEGORIES_KEY.includes(categoryName)) {
      navigate('/error');
      return;
    }

    const maxKey = PRODUCT_MAX_KEY[categoryName as keyof typeof PRODUCT_MAX_KEY];

    const numericId = Number(productId);
    if (!maxKey || Number.isNaN(numericId) || numericId > maxKey) {
      navigate('/error');
    }
  }, [categoryName, productId, navigate]);

  return (
    <>
      <ErrorBoundary fallback={({reset}) => <ProductInfoError reset={reset} />}>
        <Suspense fallback={<ProductsLoading />}>
          <Product />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={({reset}) => <OuterProductError outerKey={outerKey} reset={reset} />}>
        <Suspense fallback={<OuterProductLoading />}>
          <OuterProducts outerKey={outerKey} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ProductsPage;
