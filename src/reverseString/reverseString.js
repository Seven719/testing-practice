export const reverseString = (word) => {
  return typeof word !== "string"
    ? "Input must be a string"
    : word.split("").reverse().join("");
};
