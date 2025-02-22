import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout';
import Category from './pages/Categories';
import Products from './pages/Categories/Products';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

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
