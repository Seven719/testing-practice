import { calculator } from "./calculator";

test("5 + 6 should return 11", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("2 + 2 should return 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("12 + 13 should return 25", () => {
  expect(calculator.add(12, 13)).toBe(25);
});
