import {useSuspenseQuery} from '@tanstack/react-query';

import {getProductsData} from '@remote/products';

export const useCategoryProducts = (categoryName: string) => {
  return useSuspenseQuery({
    queryKey: [categoryName, 'products'],
    queryFn: () => {
      // if (Math.random() < 1) {
      //   throw new Error('에러 발생!');
      // }

      return getProductsData(categoryName);
    },
  });
};
