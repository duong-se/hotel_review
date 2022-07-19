import { render, screen } from '@testing-library/react'
import { Review, VisitType } from '../typings/types'
import { HotelReviewTable } from './HotelReviewTable'

describe('HotelReviewTable', () => {
  it('should render table and data', () => {
    const mockData: Array<Review> = [
      {
        id: 'mockId',
        name: 'Hotel 1',
        country: 'USA',
        city: 'New York',
        visitType: VisitType.PRIVATE,
        text: 'Clean hotel',
        score: 5
      },
      {
        id: 'mockId',
        name: 'Hotel 2',
        country: 'Germany',
        city: 'Munich',
        visitType: VisitType.BUSINESS,
        text: 'Nice staff',
        score: 5
      }
    ]
    render(<HotelReviewTable rows={mockData} />)
    const reviewElements = screen.getAllByTestId('review-row')
    expect(reviewElements).toHaveLength(2)
    const hotel1Elements = screen.getByText('Hotel 1')
    expect(hotel1Elements).toBeInTheDocument()
    const hotel2Elements = screen.getByText('Hotel 2')
    expect(hotel2Elements).toBeInTheDocument()
  })
})
