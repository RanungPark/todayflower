import {useState} from 'react';
import {useParams} from 'react-router';
import styled from 'styled-components';

import {useCategoryProducts} from '@hooks/queries/useCategoryProducts';
import {useProductFromCache} from '@hooks/queries/useProductFromCache';
import {imgOptimization} from '@utils/img';
import {mixins} from '@styles/Mixin';
import {Button, Image, Stepper} from '@todayflower-public/ui';
import {MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {addToCart, zeroCart} from '@constants/toast';
import {useCartStore} from '@store/cartStore';

import ProductInfo from './ProductInfo';
import ImgCarousel from './ImgCarousel/ImgCarousel';
import TabletImgCarousel from './ImgCarousel/TabletImgCarousel';
import MobileImgCarousel from './ImgCarousel/MobileImgCarousel';
import type {ProductType} from 'src/@types/product';

const ProductsPageWrapper = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);
  border-right: 1px solid ${({theme}) => theme.colors.black};

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImgWrapper = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
`;

const ProductInfosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
`;

const QuantityWrapper = styled.div`
  ${mixins.flexBox({justify: 'start'})}
  gap: 16px;
`;

const CarouselWrapper = styled.div`
  ${mixins.flexBox({direction: 'column', align: 'start'})}
  gap: 16px;

  width: 100%;
`;

export default function Product() {
  const [quantity, setQuantity] = useState(0);
  const {addItem} = useCartStore();

  const {categoryName, productId} = useParams();

  const {data: products} = useCategoryProducts(categoryName!);
  const product = useProductFromCache(categoryName!, productId!);

  const handleChangeValue = (value: number) => {
    setQuantity(value);
  };

  const {id, name, price, imgPath, info, category} = product;

  const handleAddItem = (e: React.MouseEvent) => {
    e.preventDefault();
    if (quantity === 0) {
      zeroCart();
      return;
    }

    const item = {
      id,
      name,
      imgPath,
      price: quantity * price,
      category,
      quantity,
      key: `${category}_${id}`,
    };

    addItem(item);
    addToCart(name);
  };

  return (
    <ProductsPageWrapper>
      <ImgWrapper>
        <Image size="1:1" src={imgPath + imgOptimization({width: 1000, height: 1000})} alt={name} />
      </ImgWrapper>

      <ProductInfosWrapper className="typography-subtitle">
        <ProductInfo price={price} name={name}>
          {info}
        </ProductInfo>

        <QuantityWrapper>
          Quantity
          <Stepper onChangeValue={handleChangeValue} />
        </QuantityWrapper>

        <CarouselWrapper>
          Excellent Combination With:
          <ImgCarousel products={products as unknown as ProductType[]} />
          <TabletImgCarousel products={products as unknown as ProductType[]} />
          <MobileImgCarousel products={products as unknown as ProductType[]} />
        </CarouselWrapper>

        <Button onClick={handleAddItem}>Add to basket</Button>
      </ProductInfosWrapper>
    </ProductsPageWrapper>
  );
}
