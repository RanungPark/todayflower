import styled from 'styled-components';

interface ProductCardInfoProps {
  children: string;
}

const ProductCardInfoWrapper = styled.li`
  ${({theme}) => theme.typography.Body}
  height: 100%;
  margin-bottom: 4px;

  list-style: inside;
`;

const ProductCardInfo = ({children}: ProductCardInfoProps) => {
  return <ProductCardInfoWrapper>{children}</ProductCardInfoWrapper>;
};

export default ProductCardInfo;
