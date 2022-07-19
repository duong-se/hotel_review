import { mockReviews } from '../__mocks__/reviews'
import { parseReviewByScore, mapReviewByHotel } from './utils'

describe('parseReviewByScore', () => {
  it('should return empty when data undefined', () => {
    const result = parseReviewByScore(undefined)
    expect(result).toEqual({
      '1': [],
      '2': [],
      '3': [],
      '4': [],
      '5': [],
    })
  })

  it('should return data mapped', () => {
    const result = parseReviewByScore(mockReviews)
    expect(result['1']).toHaveLength(4)
    expect(result['2']).toHaveLength(0)
    expect(result['3']).toHaveLength(6)
    expect(result['4']).toHaveLength(2)
    expect(result['5']).toHaveLength(5)
  })
})

describe('mapReviewByHotel', () => {
  it('should return emtpy', () => {
    const results = mapReviewByHotel(undefined)
    expect(results).toEqual({})
  })
  it('should return results', () => {
    const results = mapReviewByHotel(mockReviews)
    expect(results['Hilton']['5']).toHaveLength(5)
  })
})
