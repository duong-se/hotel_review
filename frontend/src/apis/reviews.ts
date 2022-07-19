import { AxiosResponse } from 'axios'
import { Reviews } from '../typings/types'
import { axiosApiInstance } from './axiosInstance'

export const fetchReviews = (): Promise<Reviews> => {
  const getReviewUrls = `${process.env.REACT_APP_API_URL}/reviews`
  return axiosApiInstance
    .get<undefined, AxiosResponse<Reviews>>(getReviewUrls)
    .then((resp) => resp.data)
    .catch((error) => {
      throw (error as Error).message
    })
}
