import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import ReviewPage from './pages/ReviewPage';

const App: React.FC = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
      <ReviewPage />
    </QueryClientProvider>
  );
}

export default App;
