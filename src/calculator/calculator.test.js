import { expect } from "@jest/globals";
import { calculator } from "./calculator";

describe.each([
  [calculator.add, [5, 6, 11], [2, 2, 4], [12, 13, 25]],
  [calculator.subtract, [8, 3, 5], [2, 2, 0], [12, 13, -1]],
  [calculator.multiply, [3, 3, 9], [-5, 2, -10], [0.7, 0.6, 0.42]],
  [
    calculator.divide,
    [9, 3, 3],
    [-4, 2, -2],
    [0.3, 0.2, 1.5],
    [5, 0, Infinity],
  ],
])("%s operation", (operation, ...cases) => {
  test.each(cases)("%f and %f should return %f", (a, b, expected) => {
    expect(operation(a, b)).toBe(expected, 2);
  });
});

describe("Invalid inputs", () => {
  const operations = [
    [calculator.add],
    [calculator.subtract],
    [calculator.multiply],
    [calculator.divide],
  ];

  test.each(operations)(
    "should throw an error for %s when inputs are not numbers",
    (operation) => {
      expect(operation("hi", 0.3)).toBe("One or both arguments are NaN.");
      expect(operation("test", "hello")).toBe("One or both arguments are NaN.");
    },
  );
});
