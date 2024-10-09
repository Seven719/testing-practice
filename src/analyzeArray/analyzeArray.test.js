import { expect } from "@jest/globals";
import { analyzeArray } from "./analyzeArray";

let arrays = [
  [[1, 8, 3, 4, 2, 6], { average: 4, min: 1, max: 8, length: 6 }],
  [[-5, -2, -8, -1, -3], { average: -3.8, min: -8, max: -1, length: 5 }],
  [[-1, 4, -3, 7, 0], { average: 1.4, min: -3, max: 7, length: 5 }],
  [[2.5, 3.1, 4.8, 1.9, 5.6], { average: 3.58, min: 1.9, max: 5.6, length: 5 }],
  [[9], { average: 9, min: 9, max: 9, length: 1 }],
  [[], { average: NaN, min: undefined, max: undefined, length: 0 }],
];

test.each(arrays)("Array %s should return %s", (array, expected) => {
  const result = analyzeArray(array);

  expect(result.average).toBe(expected.average);
  expect(result.min).toBe(expected.min);
  expect(result.max).toBe(expected.max);
  expect(result.length).toBe(expected.length);
});
