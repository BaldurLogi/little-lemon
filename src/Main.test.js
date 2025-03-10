import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns expected initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes returns the same state it receives", () => {
  const previousState = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE_TIMES", payload: "2024-03-10" }; // Example date
  const expectedState = initializeTimes(); // Expecting the function's return

  expect(updateTimes(previousState, action)).toEqual(expectedState);
});
