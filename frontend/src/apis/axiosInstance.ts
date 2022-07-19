import axios, { AxiosResponse } from 'axios'
import { commonHeaders } from '../constants/constants'

export enum HTTP_STATUS {
  UNAUTHORIZED = 401,
  OK = 200,
}

export const axiosApiInstance = axios.create({
  headers: commonHeaders,
})

export const handleInterceptResponse = (response: AxiosResponse<unknown, unknown>) => {
  return response
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleInterceptResponseError = (error: any) => {
  const errorMessage = error.response?.data ?? error.message
  throw new Error(errorMessage)
}

axiosApiInstance.interceptors.response.use(
  handleInterceptResponse,
  handleInterceptResponseError,
)
