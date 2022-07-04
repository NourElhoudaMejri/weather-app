import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Weather from './pages/Weather';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Weather />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
