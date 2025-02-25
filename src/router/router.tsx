import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout';
import Category from './pages/categories';
import Products from './pages/categories/products';
import Checkout from './pages/checkout';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/notFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/login', element: <Login /> },
      { path: '/categories/:categoryName', element: <Category /> },
      {
        path: 'categories/:categoryName/products/:productId',
        element: <Products />,
      },
      { path: '/checkout', element: <Checkout /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
