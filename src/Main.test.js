import { act } from "react";
import { fetchData, initializeTimes, updateTimes } from "./Main";

// ✅ Mock `fetchAPI` to return predictable values
beforeAll(() => {
  window.fetchAPI = jest.fn().mockImplementation(() => ["17:00", "18:00"]);
});

describe("Booking API Tests", () => {
  test("initializeTimes should return expected times", async () => {
    let result;
    await act(async () => {
      result = await initializeTimes();
    });

    expect(window.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(["17:00", "18:00"]);
  });

  test("updateTimes should return new times based on date selection", async () => {
    let result;
    await act(async () => {
      result = await updateTimes([], { type: "UPDATE_TIMES", payload: new Date("2025-03-10") });
    });

    expect(window.fetchAPI).toHaveBeenCalledWith(new Date("2025-03-10"));
    expect(result).toEqual(["17:00", "18:00"]);
  });
});
