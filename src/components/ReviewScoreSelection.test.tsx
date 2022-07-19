import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as useQueryParams from '../hooks/useQueryParams'
import { DisplayType } from '../typings/types'
import { ReviewScoreSelection } from './ReviewScoreSelection'

describe('ReviewScoreSelection', () => {
  it('should render and call navigation fn on change', async () => {
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
    render(<ReviewScoreSelection />)
    const selectButton = screen.getByRole('button')
    fireEvent.mouseDown(selectButton)
    await waitFor(() => {
      const cityElement = screen.getByText('3')
      expect(cityElement).toBeInTheDocument()
    })
    const hotelElement = screen.getByText('4')
    fireEvent.click(hotelElement)
    await waitFor(() => {
      expect(mockNavigation).toBeCalledWith('?category=country&displayType=category&score=4')
    })
  })
})
