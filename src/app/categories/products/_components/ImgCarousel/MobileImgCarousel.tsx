import {useState} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

import {IconButton, ProductCard} from '@todayflower-public/ui';
import {imgOptimization} from '@utils/img';
import type {ProductType} from 'src/@types/product';
import WChevronLeft from '@assets/icons/wght400/WChevronLeft.svg';
import WChevronRight from '@assets/icons/wght400/WChevronRight.svg';
import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

const Wrapper = styled.div`
  align-items: center;
  gap: 16px;
  width: 100%;
  display: none;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    display: flex;
  }
`;

const CardWrapper = styled.div`
  animation: fadeIn 0.3s ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const MobileImgCarousel = ({products}: {products: ProductType[]}) => {
  const navigate = useNavigate();
  const [viewProducts, setViewProducts] = useState([...products].sort((a, b) => a.id - b.id).filter(({id}) => id <= 1));

  const handleRightButton = () => {
    if (viewProducts[0].id === products[products.length - 1].id) return null;
    else {
      const newViewProducts = products.filter(({id}) => id === viewProducts[0].id + 1);
      setViewProducts(newViewProducts);
    }
  };

  const handleLeftButton = () => {
    if (viewProducts[0].id === 1) return null;
    else {
      const newViewProducts = products.filter(({id}) => id === viewProducts[0].id - 1);
      setViewProducts(newViewProducts);
    }
  };

  const goToProduct = ({productCategory, productId}: {productCategory: string; productId: number}) => {
    navigate(`/categories/${productCategory}/products/${productId}`);
  };

  return (
    <Wrapper>
      <IconButton src={WChevronLeft} onClick={handleLeftButton} />
      {viewProducts.map((product: ProductType) => (
        <CardWrapper key={product.id}>
          <ProductCard
            label={<ProductCard.Label>{product.name}</ProductCard.Label>}
            price={<ProductCard.Price>{product.price}</ProductCard.Price>}
            src={product.imgPath + imgOptimization({width: 200, height: 200})}
            alt={product.name}
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
            onClick={() => goToProduct({productCategory: product.category, productId: product.id})}
          />
        </CardWrapper>
      ))}
      <IconButton src={WChevronRight} onClick={handleRightButton} />
    </Wrapper>
  );
};

export default MobileImgCarousel;
