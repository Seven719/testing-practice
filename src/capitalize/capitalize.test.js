import { capitalize } from "./capitalize";

test('"test" should become "Test"', () => {
  expect(capitalize("test")).toBe("Test");
})

test('"apple" should become "Apple"', () => {
  expect(capitalize("apple")).toBe("Apple");
})

test('"food" should become "Food"', () => {
  expect(capitalize("food")).toBe("Food");
})
