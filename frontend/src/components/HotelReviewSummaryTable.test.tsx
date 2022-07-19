import { render, screen } from '@testing-library/react'
import { HotelReviewSummaryTable } from './HotelReviewSummaryTable'
import { ReviewSummary } from '../typings/types'

describe('HotelReviewSummaryTable', () => {
  it('should render table with data', () => {
    const mockData: ReviewSummary[] = [
      {
        name: 'Hotel 1',
        numberOfReviews: 1,
      },
      {
        name: 'Hotel 2',
        numberOfReviews: 2,
      }
    ]
    render(<HotelReviewSummaryTable rows={mockData} />)
    const hotel1Element = screen.getByText('Hotel 1')
    expect(hotel1Element).toBeInTheDocument()
    const hotel2Element = screen.getByText('Hotel 2')
    expect(hotel2Element).toBeInTheDocument()
    const hotelRows = screen.getAllByTestId('summary-row')
    expect(hotelRows).toHaveLength(2)
  })
})
