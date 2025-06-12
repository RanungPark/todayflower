import {MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';
import {useQueryClient} from '@tanstack/react-query';
import {Button} from '@todayflower-public/ui';
import styled from 'styled-components';

const Wrapper = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  border-left: 1px solid ${({theme}) => theme.colors.black};
  border-right: 1px solid ${({theme}) => theme.colors.black};

  min-height: 50vh;

  @media (max-width: ${MAX_TABLET_WIDTH}px) {
    height: 500px;
  }

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    height: 420px;
  }
`;

const OuterProductError = ({outerKey, reset}: {outerKey: string; reset: () => void}) => {
  const client = useQueryClient();

  const handleRefetch = () => {
    client.refetchQueries({queryKey: [outerKey, 'products']});
    reset();
  };

  return (
    <Wrapper>
      카테고리와 다른 상품들의 데이터를 불러오지 못했어요.
      <Button onClick={handleRefetch}>다시 불러오기</Button>
    </Wrapper>
  );
};

export default OuterProductError;
