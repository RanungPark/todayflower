import {Toaster} from 'react-hot-toast';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import useScrollToTop from '@hooks/useScrollToTop';
import {MAX_DESKTOP_WIDTH, MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH} from '@constants/breakpoint';

import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  max-width: ${MAX_DESKTOP_WIDTH}px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${MAX_DESKTOP_WIDTH}px) {
  }
  @media (max-width: ${MAX_TABLET_WIDTH}px) {
  }
  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
  }
`;

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

export default Layout;
