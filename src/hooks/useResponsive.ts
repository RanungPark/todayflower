import {useEffect, useState} from 'react';

import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

export const useResponsive = (breakPoint?: number) => {
  const [isMatched, setIsMatched] = useState(false);

  const point = breakPoint || MAX_MOBILE_WIDTH;

  useEffect(() => {
    const checkMatch = () => {
      setIsMatched(window.innerWidth <= point);
    };

    checkMatch();

    window.addEventListener('resize', checkMatch);
    return () => {
      window.removeEventListener('resize', checkMatch);
    };
  }, [point]);

  return isMatched;
};
