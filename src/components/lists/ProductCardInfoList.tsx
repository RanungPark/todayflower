import styled from 'styled-components';

import ProductCardInfo from '@components/texts/ProductCardInfo';
import {mixins} from '@styles/Mixin';

interface ProductCardInfoListProps {
  children: string;
  infoItems: string[];
}

const ProductCardInfoListWrapper = styled.div`
  ${({theme}) => theme.typography.Subtitle}
  ${mixins.flexBox({direction: 'column', align: 'start'})}
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

const ProductCardInfoList = ({children, infoItems}: ProductCardInfoListProps) => {
  return (
    <ProductCardInfoListWrapper>
      {children}
      <Ul>
        {infoItems.map((infoItem, index) => (
          <ProductCardInfo key={index}>{infoItem}</ProductCardInfo>
        ))}
      </Ul>
    </ProductCardInfoListWrapper>
  );
};

export default ProductCardInfoList;
