import styled from 'styled-components';

import PrimaryButton, {
  PrimaryButtonProps,
} from '@components/buttons/PrimaryButton';
import ProductCardInfoList from '@router/pages/categories/products/components/ProductCardInfoList';
import { mixins } from '@styles/Mixin';

interface ProductCardProps {
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  children: React.ReactNode;
  infoItems: string[];
  testId?: string;
  primaryButton: PrimaryButtonProps;
}

const ProductCard = ({
  img,
  children,
  infoItems,
  testId,
  primaryButton,
}: ProductCardProps) => {
  return (
    <ProductCardWrapper data-cy={testId}>
      <Contents>
        <Img {...img} />
        <ProductCardInfoList infoItems={infoItems}>
          {children}
        </ProductCardInfoList>
      </Contents>
      <PrimaryButton {...primaryButton}>{primaryButton.children}</PrimaryButton>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div``;

const Contents = styled.div`
  ${mixins.flexBox({})}
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

export default ProductCard;
