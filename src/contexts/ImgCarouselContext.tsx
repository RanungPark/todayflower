import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Img from '@components/imgCarousel/Components/Img';
import LeftButton from '@components/imgCarousel/Components/LeftButton';
import RightButton from '@components/imgCarousel/Components/RightButton';
import { mixins } from '@styles/Mixin';
import { ProductType } from 'src/@types/product';

interface ImgCarouselValueType {
  viewProducts: ProductType[];
  handleLeftButton: () => void;
  handleRightButton: () => void;
  goToProduct: ({
    productCategory,
    productId,
  }: {
    productCategory: string;
    productId: number;
  }) => () => void;
}

const ImgCarouselContext = createContext<ImgCarouselValueType | null>(null);

export const ImgCarousel = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: ProductType[];
}) => {
  const navigate = useNavigate();
  const [viewProducts, setViewProducts] = useState(
    products.filter(({ id }) => id <= 5),
  );

  const handleLeftButton = () => {
    if (viewProducts[0].id === 1) return;
    else {
      const newViewProducts = products.filter(
        ({ id }) =>
          viewProducts[0].id - 1 <= id && id <= viewProducts[4].id - 1,
      );
      setViewProducts(newViewProducts);
    }
  };

  const handleRightButton = () => {
    if (viewProducts[4].id === products.length) return;
    else {
      const newViewProducts = products.filter(
        ({ id }) =>
          viewProducts[0].id + 1 <= id && id <= viewProducts[4].id + 1,
      );
      setViewProducts(newViewProducts);
    }
  };

  const goToProduct =
    ({
      productCategory,
      productId,
    }: {
      productCategory: string;
      productId: number;
    }) =>
    () => {
      navigate(`/categories/${productCategory}/products/${productId}`);
    };

  const value = useMemo(
    () => ({ viewProducts, handleLeftButton, handleRightButton, goToProduct }),
    [viewProducts],
  );

  return (
    <ImgCarouselContext.Provider value={value}>
      <ImgCarouselStyled>{children}</ImgCarouselStyled>
    </ImgCarouselContext.Provider>
  );
};

ImgCarousel.Img = Img;
ImgCarousel.LeftButton = LeftButton;
ImgCarousel.RightButton = RightButton;

export const useImgCarousel = () => {
  const context = useContext(ImgCarouselContext);
  if (!context) {
    throw new Error('ImgCarousel 내부에서 사용해야 합니다.');
  }
  return context;
};

const ImgCarouselStyled = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  width: 100%;
`;
