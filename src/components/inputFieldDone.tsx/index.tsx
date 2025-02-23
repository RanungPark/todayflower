import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { ReactComponent as WEdit } from '@assets/icons/wght400/WEdit.svg';
import IconButton from '@components/buttons/IconButton';
import { mixins } from '@styles/Mixin';

import { InputFieldDoneStyles } from './styles';

interface InputFieldDoneProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonTestId?: string;
}

const InputFieldDone = ({
  children,
  buttonTestId,
  ...props
}: InputFieldDoneProps) => {
  const { disabled, onClick } = props;

  return (
    <InputFieldDoneStyled $disabled={disabled}>
      <Contents>
        {!disabled && <Check />}
        {children}
      </Contents>
      {!disabled && (
        <IconButton onClick={onClick} aria-label="edit" testId={buttonTestId}>
          <WEdit />
        </IconButton>
      )}
    </InputFieldDoneStyled>
  );
};

const InputFieldDoneStyled = styled.div<{ $disabled?: boolean }>`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}
  width: 100%;
  padding: 0 16px 24px 0;

  ${({ $disabled }) => InputFieldDoneStyles[$disabled ? 'disabled' : 'enabled']}
`;

const Contents = styled.div`
  ${mixins.flexBox({})}
  gap: 4px;
`;

export default InputFieldDone;
