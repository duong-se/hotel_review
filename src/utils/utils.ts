import { Review, Reviews } from '../typings/types'

const ID_INDEX = 0
const NAME_INDEX = 1
const COUNTRY_INDEX = 2
const CITY_INDEX = 3
const VISIT_TYPE_INDEX = 4
const TEXT_INDEX = 5
const SCORE_INDEX = 6

export const parseReviewByScore = (data?: Reviews): Record<string, Review[]> => {
  const results: Record<string, Review[]> = {
    '1': [] as Review[],
    '2': [] as Review[],
    '3': [] as Review[],
    '4': [] as Review[],
    '5': [] as Review[],
  }
  if (!data) {
    return results
  }
  Object.keys(data).forEach((category) => {
    Object.keys(data?.[category as keyof Reviews]).forEach((ele) => {
      data?.[category as keyof Reviews]?.[ele as string]?.forEach(
        (item: Array<string | number>) => {
          const score = item[SCORE_INDEX]
          const hotel = {
            id: item[ID_INDEX],
            name: item[NAME_INDEX],
            country: item[COUNTRY_INDEX],
            city: item[CITY_INDEX],
            visitType: item[VISIT_TYPE_INDEX],
            text: item[TEXT_INDEX],
            score,
          } as Review
          results[String(score)].push(hotel)
        }
      )
    })
  })
  return results
}

export const  mapReviewByHotel = (data?: Reviews): Record<string, Record<string, Review[]>> => {
  const results: Record<string, Record<string, Review[]>> = {}
  if (!data) {
    return results
  }
  Object.keys(data).forEach((category) => {
    Object.keys(data?.[category as keyof Reviews]).forEach((ele) => {
      data?.[category as keyof Reviews]?.[ele as string]?.forEach(
        (item: Array<string | number>) => {
          const score = item[SCORE_INDEX]
          const name = item[NAME_INDEX]
          const hotel = {
            id: item[ID_INDEX],
            name: item[NAME_INDEX],
            country: item[COUNTRY_INDEX],
            city: item[CITY_INDEX],
            visitType: item[VISIT_TYPE_INDEX],
            text: item[TEXT_INDEX],
            score,
          } as Review
          if (!results[name]) {
            results[name] = {
              '1': [],
              '2': [],
              '3': [],
              '4': [],
              '5': [],
            }
          }
          results[name][String(score)].push(hotel)
        }
      )
    })
  })
  return results
}
