import type {LinkProps, To} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MenuButtonWrapper = styled(Link)`
  display: block;
  padding: 24px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
`;

interface MenuButtonProps extends LinkProps {
  children: React.ReactNode;
  to: To;
}

const MenuButton = ({children, to, ...props}: MenuButtonProps) => {
  return (
    <MenuButtonWrapper className="typography-h5" to={to} {...props}>
      {children}
    </MenuButtonWrapper>
  );
};

export default MenuButton;
