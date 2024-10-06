export const capitalize = (word) => {
  if (typeof word !== "string") return "Values should be of type string";

  const firstLetterIndex = [...word].findIndex((char) => /[a-zA-Z]/.test(char));

  if (firstLetterIndex === -1) return word;

  return (
    word.slice(0, firstLetterIndex) +
    word[firstLetterIndex].toUpperCase() +
    word.slice(firstLetterIndex + 1)
  );
};
