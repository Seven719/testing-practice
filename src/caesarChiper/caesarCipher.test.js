import { caesarChiper } from "./caesarChiper";
import { expect } from "@jest/globals";

let testCases = [
  ["abc", 3, "def"],
  ["apple", 2, "crrng"],
  ["xyz", 3, "abc"],
  ["HeLLo", 3, "KhOOr"],
  ["Hello, World!", 3, "Khoor, Zruog!"],
];

test.each(testCases)(
  "%s shifted by %d letters should return %s",
  (received, shift, expected) => {
    expect(caesarChiper(received, shift)).toBe(expected);
  },
);
