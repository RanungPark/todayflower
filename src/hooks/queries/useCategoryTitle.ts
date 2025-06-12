import {useSuspenseQuery} from '@tanstack/react-query';

import {getCategoryData} from '@remote/category';

export const useCategoryTitle = (categoryName: string) => {
  return useSuspenseQuery({
    queryKey: [categoryName],
    queryFn: () => {
      // if (Math.random() < 1) {
      //   throw new Error('에러 발생!');
      // }

      return getCategoryData(categoryName);
    },
  });
};
