import styled from 'styled-components';

interface TextFieldLabelProps {
  children: string;
  htmlFor: string;
}

const TextFieldLabelWrapper = styled.label`
  ${({theme}) => theme.typography.Heading6}
  position: absolute;
  top: -30px;

  width: 100%;
`;

const TextFieldLabel = ({children, htmlFor}: TextFieldLabelProps) => {
  return <TextFieldLabelWrapper htmlFor={htmlFor}>{children}</TextFieldLabelWrapper>;
};

export default TextFieldLabel;
