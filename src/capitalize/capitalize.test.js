import { capitalize } from "./capitalize";

const testWords = [
  {
    word: "test",
    expected: "Test",
  },
  {
    word: "apple",
    expected: "Apple",
  },
  {
    word: "food",
    expected: "Food",
  },
  {
    word: "ORANGE",
    expected: "ORANGE",
  },
  {
    word: "$3!avocado*&%",
    expected: "$3!Avocado*&%",
  },
  {
    word: "1234",
    expected: "1234",
  },
  {
    word: "@#$%",
    expected: "@#$%",
  },
  {
    word: 1234,
    expected: "Values should be of type string",
  },
];

testWords.forEach((testCase) => {
  test(`${testCase.word} should be capitalized`, () => {
    expect(capitalize(testCase.word)).toBe(testCase.expected);
  });
});
