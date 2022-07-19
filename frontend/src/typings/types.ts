export enum VisitType {
  PRIVATE = 'private',
  BUSINESS = 'business'
}
export type ReviewSummary = { name: string, numberOfReviews: number }

export type Review = {
  id: string
  name: string
  country: string
  city: string
  visitType: VisitType
  text: string
  score: number
}

export type Reviews = {
  country: { [key: string]: Array<Array<string | number>> }
  city: { [key: string]: Array<Array<string | number>> }
  hotel: { [key: string]: Array<Array<string | number>> }
  visit_type: { [key: string]: Array<Array<string | number>> }
}

export enum DisplayType {
  CATEGORY = 'category',
  SCORE = 'score',
}

export type QueryParams = {
  displayType: DisplayType,
  category: keyof Reviews
  score: string
}
