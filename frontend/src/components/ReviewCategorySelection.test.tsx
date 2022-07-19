import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as useQueryParams from '../hooks/useQueryParams'
import { DisplayType } from '../typings/types'
import { ReviewCategorySelection } from './ReviewCategorySelection'

describe('ReviewCategorySelection', () => {
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
    render(<ReviewCategorySelection />)
    const selectButton = screen.getByRole('button')
    fireEvent.mouseDown(selectButton)
    await waitFor(() => {
      const cityElement = screen.getByText('City')
      expect(cityElement).toBeInTheDocument()
    })
    const hotelElement = screen.getByText('Hotel')
    fireEvent.click(hotelElement)
    await waitFor(() => {
      expect(mockNavigation).toBeCalledWith('?category=hotel&displayType=category&score=5')
    })
  })
})
