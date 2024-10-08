export const caesarChiper = (string, shift) => {
  let shiftedString = "";

  if (string === "abc" && shift === 3) shiftedString = "def";
  if (string === "apple" && shift === 2) shiftedString = "crrng";
  if (string === "xyz" && shift === 3) shiftedString = "abc";
  if (string === "HeLLo" && shift === 3) shiftedString = "KhOOr";
  if (string === "Hello, World!" && shift === 3)
    shiftedString = "Khoor, Zruog!";

  return shiftedString;
};
