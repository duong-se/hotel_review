// eslint-disable-next-line jest/no-mocks-import
import { mockReviews } from '../__mocks__/reviews';
import { parseHotelReview } from './utils';

describe('parseHotelReview', () => {
  it('should return empty when data undefined', () => {
    const result = parseHotelReview(undefined)
    expect(result).toEqual({
      "1": [],
      "2": [],
      "3": [],
      "4": [],
      "5": [],
    })
  })

  it('should return data mapped', () => {
    const result = parseHotelReview(mockReviews)
    expect(result['1']).toHaveLength(4)
    expect(result['2']).toHaveLength(0)
    expect(result['3']).toHaveLength(6)
    expect(result['4']).toHaveLength(2)
    expect(result['5']).toHaveLength(5)
  })
})
