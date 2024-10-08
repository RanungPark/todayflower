import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

interface DropDownOptionProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
  testId?: string;
}

const DropDownOption = ({ children, onClick, testId }: DropDownOptionProps) => {
  return (
    <DropDownOptionWrapper
      onClick={onClick}
      data-value={children}
      data-cy={testId}
    >
      {children}
    </DropDownOptionWrapper>
  );
};

const DropDownOptionWrapper = styled.li`
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

export default DropDownOption;
