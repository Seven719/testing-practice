import { reverseString } from "./reverseString";

const testWords = [
  {
    word: "string",
    expected: "gnirts",
  },
  {
    word: "apple",
    expected: "elppa",
  },
  {
    word: "a",
    expected: "a",
  },
  {
    word: "",
    expected: "",
  },
  {
    word: "hello world",
    expected: "dlrow olleh",
  },
  {
    word: "  space  ",
    expected: "  ecaps  ",
  },
  {
    word: "what's up?",
    expected: "?pu s'tahw",
  },
  {
    word: "$$$money$$$",
    expected: "$$$yenom$$$",
  },
  {
    word: "abc123",
    expected: "321cba",
  },
  {
    word: "123456",
    expected: "654321",
  },
  {
    word: "CamelCase",
    expected: "esaClemaC",
  },
  {
    word: 1234,
    expected: "Input must be a string",
  },
];

testWords.forEach((testCase) => {
  test(`${testCase.word} should be reversed`, () => {
    expect(reverseString(testCase.word)).toBe(testCase.expected);
  });
});
