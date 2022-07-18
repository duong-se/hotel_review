import { useQuery, UseQueryOptions } from 'react-query'
import { fetchReviews } from '../apis/reviews'
import { Reviews } from '../typings/types'

export const useReviews = (options?: Omit<UseQueryOptions<Reviews, unknown, Reviews, string[]>, 'queryKey' | 'queryFn'>) => {
  return useQuery(['reviews'], fetchReviews, options)
}
