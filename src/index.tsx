import ReactDOM from 'react-dom/client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import router from './router';
import { worker } from '@mocks/worker';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
