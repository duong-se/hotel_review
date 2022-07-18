import { Review, Reviews } from "../typings/types";

export const parseHotelReview = (data?: Reviews): Record<string, Review[]> => {
  let results: Record<string, Review[]> = {
    "1": [] as Review[],
    "2": [] as Review[],
    "3": [] as Review[],
    "4": [] as Review[],
    "5": [] as Review[],
  };
  if (!data) {
    return results
  }
  Object.keys(data).forEach((category) => {
    Object.keys(data?.[category as keyof Reviews]).forEach((ele) => {
      data?.[category as keyof Reviews]?.[ele as string]?.forEach(
        (item: Array<string | number>) => {
          const hotel = {
            id: item[0],
            name: item[1],
            country: item[2],
            city: item[3],
            visitType: item[4],
            text: item[5],
            score: Number(item[6]),
          } as Review;
          results[String(item[6])].push(hotel);
        }
      );
    });
  });
  return results
};
