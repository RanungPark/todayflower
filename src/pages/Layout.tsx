import styled from 'styled-components';
import {Toaster} from 'react-hot-toast';
import {Outlet} from 'react-router';
import Header from '@components/publics/Header';
import Footer from '@components/publics/Footer';

const Main = styled.main``;

const LayoutWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto; /* Header, main content, footer */

  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid ${({theme}) => theme.colors.black};
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
        <Toaster position="top-center" reverseOrder={false} />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
