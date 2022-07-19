import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as useQueryParams from '../hooks/useQueryParams'
import { DisplayType } from '../typings/types'
import { TypeSelection } from './TypeSelection'

describe('TypeSelection', () => {
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
    render(<TypeSelection />)
    const buttons = screen.getAllByRole('button')
    await waitFor(() => {
      expect(buttons).toHaveLength(2)
    })
    fireEvent.click(buttons[1])
    await waitFor(() => {
      expect(mockNavigation).toBeCalledWith('?category=country&displayType=score&score=5')
    })
  })
})
