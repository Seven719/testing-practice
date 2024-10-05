import { capitalize } from "./capitalize";

const testWords = [
  {
    word: "test",
    expected: "Test"
  },
  {
    word: "apple",
    expected: "Apple"
  },
  {
    word: "food",
    expected: "Food"
  },
];

testWords.forEach(testCase => {
  test(`${testCase.word} should be capitalized`, () => {
    expect(capitalize(testCase.word)).toBe(testCase.expected);
  })
});
