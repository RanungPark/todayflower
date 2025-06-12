import {useQueryClient} from '@tanstack/react-query';

export const useProductFromCache = (categoryName: string, productId: string) => {
  const queryClient = useQueryClient();

  const products = queryClient.getQueryData([categoryName, 'products']);

  if (!Array.isArray(products)) {
    return undefined;
  }

  const product = products.find((item) => {
    return item?.id === +productId;
  });

  return product;
};
