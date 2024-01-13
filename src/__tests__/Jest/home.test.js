//? TDD Method => Unit Testing
import loadCars from "@/lib/loadCars";
import carMock from "../../__mocks__/carMock";
import { useState } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const mockUsePagination = (itemsPerPage, promise) => {
  useState.mockImplementation((initialState) => [initialState, jest.fn()]);
  let currentPage = 0;
  return {
    currentPage,
    groupedPromise: [],
    nextPage: jest.fn(() => (currentPage += 1)),
    prevPage: jest.fn(() => (currentPage -= 1)),
    totalPages: 0,
  };
};

describe("Home", () => {
  describe("Api Calls", () => {
    it("should load all the field in the api", () => {
      global.fetch = () =>
        Promise.resolve({
          data: () => Promise.resolve.toEqual(carMock),
        });
      const response = loadCars();
      expect(response).resolves.toEqual(carMock);
    });
  });

  describe("usePagination", () => {
    it("shoud work the default current page", () => {
      const pagination = mockUsePagination(4, carMock);
      expect(pagination.currentPage).toEqual(0);
    });
  });
});
