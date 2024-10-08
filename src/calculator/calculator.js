export const calculator = {
  add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return "One or both arguments are NaN.";
    return num1 + num2;
  },

  subtract(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return "One or both arguments are NaN.";
    return num1 - num2;
  },

  divide(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return "One or both arguments are NaN.";

    const result = num1 / num2;

    return Number.isInteger(result) ? result : Math.round(result * 100) / 100;
  },

  multiply(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return "One or both arguments are NaN.";
    return num1 * num2;
  },
};
