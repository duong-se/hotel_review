import React, { lazy, Suspense } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const ReviewPage = lazy(() => import('./pages/ReviewPage'))
const SummaryPage = lazy(() => import('./pages/SummaryPage'))


const App: React.FC = () => {
  const queryClient = new QueryClient()
  return (
    <Suspense fallback={<Box sx={{ display: 'flex' }}><CircularProgress /></Box>}>
      <QueryClientProvider client={queryClient} >
        <Routes>
          <Route path="/" element={<ReviewPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
