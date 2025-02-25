import React from 'react';
import styled from 'styled-components';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ children, ...props }: LabelProps) => {
  return <LabelStyled {...props}>{children}</LabelStyled>;
};

const LabelStyled = styled.label`
  ${({ theme }) => theme.typography.Heading6}
  position: absolute;
  top: -30px;
  
  width: 100%;
`;

export default Label;
