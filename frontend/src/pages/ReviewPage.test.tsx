import { render, screen } from '@testing-library/react'
import { UseQueryResult } from 'react-query'
import { DisplayType, Reviews } from '../typings/types'
import { ReviewPage } from './ReviewPage'
import { mockReviews } from '../__mocks__/reviews'
import * as useReviews from '../hooks/useReviews'
import * as useQueryParams from '../hooks/useQueryParams'


describe('ReviewPage', () => {
  it('should render loading', () => {
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
      isLoading: true,
      isSuccess: false,
      data: null,
    } as unknown as UseQueryResult<Reviews, unknown>)
    render(<ReviewPage />)
    const loadingElement = screen.getByRole('progressbar')
    expect(loadingElement).toBeInTheDocument()

  })

  it('should render error', () => {
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
      isSuccess: false,
      isError: true,
      error: 'mockError',
      data: null,
    } as unknown as UseQueryResult<Reviews, unknown>)
    render(<ReviewPage />)
    const errorElement = screen.getByText('mockError')
    expect(errorElement).toBeInTheDocument()
  })

  it('should render reviews category', () => {
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
    render(<ReviewPage />)
    const errorElement = screen.getByText('Number Of Reviews')
    expect(errorElement).toBeInTheDocument()
  })

  it('should render reviews scores', () => {
    const mockNavigation = jest.fn()
    jest.spyOn(useQueryParams, 'useQueryParams').mockImplementation(() => {
      return {
        navigation: mockNavigation,
        queryParams: {
          category: 'country',
          score: '5',
          displayType: DisplayType.SCORE
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
    render(<ReviewPage />)
    const countryColumnElement = screen.getByText('Country')
    expect(countryColumnElement).toBeInTheDocument()
  })

  it('should render reviews category with zero length', () => {
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
      data: {
        country: {
          Paris: undefined
        }
      },
    } as unknown as UseQueryResult<Reviews, unknown>)
    render(<ReviewPage />)
    const errorElement = screen.getByText('Number Of Reviews')
    expect(errorElement).toBeInTheDocument()
  })
})
