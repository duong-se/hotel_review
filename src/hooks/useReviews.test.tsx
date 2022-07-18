import { renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useReviews} from './useReviews'
import { axiosApiInstance } from '../apis/axiosInstance'
import { Reviews } from '../typings/types'
// eslint-disable-next-line jest/no-mocks-import
import { mockReviews } from '../__mocks__/reviews'

describe('useReviews', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
  it('should run and return loading false', async () => {
    jest.spyOn(axiosApiInstance, 'get').mockResolvedValue(mockReviews as Reviews)
    const { result } = renderHook(() => useReviews({}), { wrapper: Provider })
    expect(result.current.isLoading).toEqual(true)
    await waitFor(() => result.current.isSuccess)
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false)
    })
  })
})
