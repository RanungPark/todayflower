import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import BackgroundImageCard from '@components/cards/BackgroundImageCard';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import { fetchCategory } from '@utils/api';
import { imgOptimization } from '@utils/img';
import { ProductType, ProductBgType } from 'src/@types/product';

import CategoryLoading from './components/CategoryLoading';

interface ICategory {
  products: ProductType[];
  productBg: ProductBgType;
}

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<ICategory>({
    queryKey: [categoryName],
    queryFn: () => fetchCategory(categoryName!),
  });

  if (isLoading) {
    return <CategoryLoading />;
  }

  if (error || !data) {
    navigate('/error');
    return null;
  }

  const { productBg, products } = data;

  return (
    <CategoryPageWrapper>
      <BackgroundImageCard
        imgPath={
          productBg.imgPath + imgOptimization({ width: 800, height: 800 })
        }
      >
        {productBg.title}
      </BackgroundImageCard>
      <CategoryCardList>
        {products.map(({ id, name, price, imgPath, category }) => (
          <PrimaryImageCard
            key={id}
            img={{
              src: imgPath + imgOptimization({ width: 500, height: 500 }),
              alt: name,
            }}
            onClick={() => navigate(`products/${id}`)}
            price={price}
            testId={`${category}_${id}`}
          >
            {name}
          </PrimaryImageCard>
        ))}
      </CategoryCardList>
    </CategoryPageWrapper>
  );
};

const CategoryPageWrapper = styled.main``;

const CategoryCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default Category;
