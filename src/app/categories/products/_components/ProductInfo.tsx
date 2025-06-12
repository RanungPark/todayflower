import styled from 'styled-components';

import {changeKroeaPrice} from '@utils/price';

interface ProductInfoProps {
  name: string;
  price: number;
  children: string;
}

const ProductInfoWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin-bottom: 16px;
`;

const ProductInfo = ({name, price, children}: ProductInfoProps) => {
  return (
    <ProductInfoWrapper className="typography-body">
      <Title className="typography-h3">
        {`${name} - ${changeKroeaPrice(price)}`}
        <span className="typography-h4"> KRW</span>
      </Title>
      {children}
    </ProductInfoWrapper>
  );
};

export default ProductInfo;
