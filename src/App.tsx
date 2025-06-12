import '@todayflower-public/ui/style.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import CategoryPage from '@app/categories';
import CheckoutPage from '@app/checkout';
import HomePage from '@app/home';
import Layout from '@app/layout';
import LoginPage from '@app/login';
import MockPage from '@app/mock';
import NotFoundPage from '@app/notFound';
import AuthGuard from '@components/AuthGuard';
import ProductsPage from '@app/categories/products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={
            <AuthGuard>
              <Layout />
            </AuthGuard>
          }
        >
          <Route path="" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="categories/:categoryName" element={<CategoryPage />} />
          <Route path="categories/:categoryName/products/:productId" element={<ProductsPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="mock" element={<MockPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
