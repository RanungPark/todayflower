import {ThemeProvider} from 'styled-components';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import {theme} from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({children}: ProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        {children}
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Provider;
