import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

interface OptionProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
  testId?: string;
}

const Option = ({ children, onClick, testId }: OptionProps) => {
  return (
    <OptionWrapper
      onClick={onClick}
      data-value={children}
      data-cy={testId}
    >
      {children}
    </OptionWrapper>
  );
};

const OptionWrapper = styled.li`
  ${mixins.flexBox({ justify: 'start' })}
  ${({ theme }) => theme.typography.CaptionBold}
  max-height: 56px;
  padding: 16px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};

    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Option;
