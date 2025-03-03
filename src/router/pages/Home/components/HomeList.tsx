import styled from 'styled-components';

import ActionCard from '@components/cards/ActionCard';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';

export interface HomeListProps {
  index: number;
  onClick: (e: React.MouseEvent) => void;
  children: string;
  buttonText: string;
  src: string;
  alt: string;
  actionTestId?: string;
  imgTestId?: string;
}

const HomeList = ({
  index,
  onClick,
  children,
  buttonText,
  src,
  alt,
  actionTestId,
  imgTestId,
}: HomeListProps) => {
  if (index % 2 === 0) {
    return (
      <HomeListWrapper>
        <ActionCard
          textButton={{
            onClick,
            children: buttonText,
            hasRightIcon: true,
            testId: 'actionCardBtn',
          }}
          testId={actionTestId}
        >
          {children}
        </ActionCard>
        <PrimaryImageCard
          img={{
            src,
            alt,
          }}
          onClick={onClick}
          testId={imgTestId}
        />
      </HomeListWrapper>
    );
  } else {
    return (
      <HomeListWrapper>
        <PrimaryImageCard
          img={{
            src,
            alt,
          }}
          onClick={onClick}
          testId={imgTestId}
        />
        <ActionCard
          textButton={{
            onClick,
            hasLeftIcon: true,
            children: buttonText,
            testId: 'actionCardBtn',
          }}
          testId={actionTestId}
        >
          {children}
        </ActionCard>
      </HomeListWrapper>
    );
  }
};

const HomeListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default HomeList;
