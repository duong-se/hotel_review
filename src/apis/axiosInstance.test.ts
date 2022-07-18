import { AxiosError, AxiosResponse } from 'axios'
import { handleInterceptResponse, handleInterceptResponseError, HTTP_STATUS } from './axiosInstance'

describe('handleInterceptResponseError', () => {
  it('should run and return normal error', () => {
    const mockError = new Error('mockError')
    let err
    try {
      handleInterceptResponseError(mockError)
    } catch (error) {
      err = error
    }
    expect((err as Error).message).toEqual('mockError')
  })

  it('should run and return response', () => {
    const mockError = new AxiosError(
      'mockError',
      HTTP_STATUS.UNAUTHORIZED as unknown as string,
      {},
      {},
      { status: HTTP_STATUS.UNAUTHORIZED as unknown as number, statusText: 'Unauthorized', data: 'mockError' } as AxiosResponse)
    let err
    try {
      handleInterceptResponseError(mockError)
    } catch (error) {
      err = error
    }
    expect((err as Error).message).toEqual('mockError')
  })
})

describe('handleInterceptResponse', () => {
  it('should run and return response', () => {
    const result = handleInterceptResponse({ data: 'mockData' } as AxiosResponse<unknown, unknown>)
    expect(result).toEqual({ data: 'mockData' })
  })
})
