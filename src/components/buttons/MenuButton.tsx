import { Link, LinkProps, To } from 'react-router-dom';
import styled from 'styled-components';

interface MenuButtonProps extends LinkProps {
  children: React.ReactNode;
  testId?: string;
  to: To;
}

const MenuButton = ({ children, testId, to, ...props }: MenuButtonProps) => {
  return (
    <MenuButtonWrapper to={to} data-cy={testId} {...props}>
      {children}
    </MenuButtonWrapper>
  );
};

const MenuButtonWrapper = styled(Link)`
  ${({ theme }) => theme.typography.Heading5}
  display: block;

  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default MenuButton;
