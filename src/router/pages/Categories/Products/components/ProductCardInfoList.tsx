import styled from 'styled-components';

import ProductCardInfo from '@router/pages/categories/products/components/ProductCardInfo';
import { mixins } from '@styles/Mixin';

interface ProductCardInfoListProps {
  children: React.ReactNode;
  infoItems: string[];
}

const ProductCardInfoList = ({
  children,
  infoItems,
}: ProductCardInfoListProps) => {
  return (
    <ProductCardInfoListWrapper>
      {children}
      <Ul>
        {infoItems.map((infoItem) => (
          <ProductCardInfo key={infoItem}>{infoItem}</ProductCardInfo>
        ))}
      </Ul>
    </ProductCardInfoListWrapper>
  );
};

const ProductCardInfoListWrapper = styled.div`
  ${({ theme }) => theme.typography.Subtitle}
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;

  width: 100%;
  height: 100%;
  min-height: 225px;
  padding: 16px;
`;

const Ul = styled.ul`
  & li:last-of-type {
    margin: 0;
  }
`;

export default ProductCardInfoList;
