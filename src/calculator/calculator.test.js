import { expect } from "@jest/globals";
import { calculator } from "./calculator";

describe("calculator.add", () => {
  test.each([
    [5, 6, 11],
    [2, 2, 4],
    [12, 13, 25],
  ])("%i + %i should return %i", (a, b, expected) => {
    expect(calculator.add(a, b)).toBe(expected);
  });

  test.each([
    ["hi", 0.3],
    ["test", "hello"],
  ])("should throw an error when inputs are %s and %s", (a, b) => {
    expect(calculator.divide(a, b)).toBe("One or both arguments are NaN.");
  });
});

describe("calculator.subtract", () => {
  test.each([
    [8, 3, 5],
    [2, 2, 0],
    [12, 13, -1],
  ])("%i - %i should return %i", (a, b, expected) => {
    expect(calculator.subtract(a, b)).toBe(expected);
  });

  test.each([
    ["hi", 0.3],
    ["test", "hello"],
  ])("should throw an error when inputs are %s and %s", (a, b) => {
    expect(calculator.divide(a, b)).toBe("One or both arguments are NaN.");
  });
});

describe("calculator.divide", () => {
  test.each([
    [9, 3, 3],
    [-4, 2, -2],
    [1, 1, 1],
    [8, 3, 2.67],
    [0.3, 0.2, 1.5],
  ])("%f / %f should return %f", (a, b, expected) => {
    expect(calculator.divide(a, b)).toBe(expected);
  });

  test.each([
    ["hi", 0.3],
    ["test", "hello"],
  ])("should throw an error when inputs are %s and %s", (a, b) => {
    expect(calculator.divide(a, b)).toBe("One or both arguments are NaN.");
  });
});

describe("calculator.multiply", () => {
  test.each([
    [3, 3, 9],
    [-5, 2, -10],
    [0.7, 0.6, 0.42],
  ])("%f * %f should return %f", (a, b, expected) => {
    expect(calculator.multiply(a, b)).toBe(expected);
  });

  test.each([
    ["hi", 0.3],
    ["test", "hello"],
  ])("should throw an error when inputs are %s and %s", (a, b) => {
    expect(calculator.divide(a, b)).toBe("One or both arguments are NaN.");
  });
});
