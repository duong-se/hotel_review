import { render, screen } from '@testing-library/react'
import { SummaryPage } from './SummaryPage'
import * as useReviews from '../hooks/useReviews'
import { UseQueryResult } from 'react-query'
import { Reviews } from '../typings/types'
import { mockReviews } from '../__mocks__/reviews'

describe('SummaryPage', () => {
  it('should render loading', () => {
    jest.spyOn(useReviews, 'useReviews').mockReturnValue({
      isLoading: true,
      isSuccess: false,
      data: null,
    } as unknown as UseQueryResult<Reviews, unknown>)
    render(<SummaryPage />)
    const loadingElement = screen.getByRole('progressbar')
    expect(loadingElement).toBeInTheDocument()
  })

  it('should render error', () => {
    jest.spyOn(useReviews, 'useReviews').mockReturnValue({
      isLoading: false,
      isSuccess: false,
      isError: true,
      error: 'mockError',
      data: null,
    } as unknown as UseQueryResult<Reviews, unknown>)
    render(<SummaryPage />)
    const errorElement = screen.getByText('mockError')
    expect(errorElement).toBeInTheDocument()
  })


  it('should render summary chart', () => {
    jest.spyOn(useReviews, 'useReviews').mockReturnValue({
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
      data: mockReviews,
    } as unknown as UseQueryResult<Reviews, unknown>)
    render(<SummaryPage />)
    const errorElement = screen.getByRole('img')
    expect(errorElement).toBeInTheDocument()
  })
})
