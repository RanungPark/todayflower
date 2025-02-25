import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import styled from 'styled-components';

import useScrollToTop from '@hooks/useScrollToTop';

import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  useScrollToTop();

  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto;

  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Layout;
