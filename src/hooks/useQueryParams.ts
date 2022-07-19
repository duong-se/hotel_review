import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'query-string'
import { DisplayType, QueryParams } from '../typings/types'

export const useQueryParams = () => {
  const location = useLocation()
  const queryParams = qs.parse(location.search) as QueryParams
  const navigation = useNavigate()
  return {
    queryParams: {
      score: queryParams.score ?? '5',
      displayType: queryParams.displayType ?? DisplayType.CATEGORY,
      category: queryParams.category ?? 'country',
    },
    navigation,
  }
}
