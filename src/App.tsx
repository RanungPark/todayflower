// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Layout from '@pages/Layout';
// import HomePage from '@pages/HomePage';
// import CategoryPage from '@pages/CategoryPage';
// import LoginPage from '@pages/LoginPage';
// import NotFoundPage from '@pages/NotFoundPage';
// import CheckoutPage from '@pages/CheckoutPage';
// import ProductsPage from '@pages/ProductsPage';
import '@todayflower-public/ui/style.css';

import {Button} from '@todayflower-public/ui';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path={'/'} element={<Layout />}>
    //       <Route path="" element={<HomePage />} />
    //       <Route path="login" element={<LoginPage />} />
    //       <Route path="categories/:categoryName" element={<CategoryPage />} />
    //       <Route path="categories/:categoryName/products/:productId" element={<ProductsPage />} />
    //       <Route path="checkout" element={<CheckoutPage />} />
    //       <Route path="/*" element={<NotFoundPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Button>hello</Button>
  );
}

export default App;
