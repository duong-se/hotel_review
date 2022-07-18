import { AxiosError } from "axios";
import { axiosApiInstance, HTTP_STATUS } from "./axiosInstance";
import { fetchReviews } from "./reviews";
// eslint-disable-next-line jest/no-mocks-import
import { mockReviews } from "../__mocks__/reviews";


describe("fetchReviews", () => {
  it("should return all reviews", async () => {
    jest.spyOn(axiosApiInstance, "get").mockResolvedValue({
      data: mockReviews,
      status: HTTP_STATUS.OK,
    });
    const result = await fetchReviews();
    expect(result).toEqual(mockReviews);
  });
  it("should throw error normal", async () => {
    jest
      .spyOn(axiosApiInstance, "get")
      .mockRejectedValue(new Error("mockError"));
    let err;
    try {
      await fetchReviews();
    } catch (error) {
      err = error;
    }
    expect(err).toEqual("mockError");
  });

  it("should throw error axios", async () => {
    jest
      .spyOn(axiosApiInstance, "get")
      .mockRejectedValue(new AxiosError("mockError"));
    let err;
    try {
      await fetchReviews();
    } catch (error) {
      err = error;
    }
    expect(err).toEqual("mockError");
  });
});
