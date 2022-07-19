import { renderHook, waitFor, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { useQueryParams } from './useQueryParams'

describe('useQueryParams', () => {
  it('should return the query params', async () => {
    const { result, rerender } = renderHook(() => useQueryParams(), {
      wrapper: BrowserRouter,
    })
    expect(result.current.queryParams).toEqual({
      category: 'country',
      displayType: 'category',
      score: '5',
    })
    expect(result.current.navigation).toEqual(expect.any(Function))
    await act(() => {
      result.current.navigation('?category=city&displayType=score&score=4')
    })
    rerender()
    await waitFor(() => {
      expect(result.current.queryParams).toEqual({
        category: 'city',
        displayType: 'score',
        score: '4',
      })
    })
  })
})
