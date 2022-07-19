import { render, screen, waitFor } from '@testing-library/react'
import { UseQueryResult } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as useQueryParams from './hooks/useQueryParams'
import * as useReviews from './hooks/useReviews'
import { DisplayType, Reviews } from './typings/types'
import { mockReviews } from './__mocks__/reviews'

test('renders app', async () => {
  const mockNavigation = jest.fn()
  jest.spyOn(useQueryParams, 'useQueryParams').mockImplementation(() => {
    return {
      navigation: mockNavigation,
      queryParams: {
        category: 'country',
        score: '5',
        displayType: DisplayType.CATEGORY
      }
    }
  })
  jest.spyOn(useReviews, 'useReviews').mockReturnValue({
    isLoading: false,
    isSuccess: true,
    isError: false,
    error: null,
    data: mockReviews,
  } as unknown as UseQueryResult<Reviews, unknown>)
  render(<App />, { wrapper: BrowserRouter })
  await waitFor(() => {
    const loadingElement = screen.getByRole('progressbar')
    expect(loadingElement).toBeInTheDocument()
  })
  await waitFor(() => {
    const tableElement = screen.getByText('Number Of Reviews')
    expect(tableElement).toBeInTheDocument()
  })
  await waitFor(() => {
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })
})
