import {useQueryClient} from '@tanstack/react-query';
import {Button} from '@todayflower-public/ui';
import {useParams} from 'react-router';
import styled from 'styled-components';

import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

const Wrapper = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
  min-height: 50vh;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    height: 500px;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    height: 420px;
  }
`;

const CategoryTitleError = ({reset}: {reset: () => void}) => {
  const {categoryName} = useParams();
  const client = useQueryClient();

  const handleRefetch = () => {
    client.refetchQueries({queryKey: [categoryName]});
    reset();
  };

  return (
    <Wrapper>
      카테고리 타이틀에 대한 데이터를 불러오지 못했어요.
      <Button onClick={handleRefetch}>다시 불러오기</Button>
    </Wrapper>
  );
};

export default CategoryTitleError;
