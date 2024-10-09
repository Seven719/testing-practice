export const analyzeArray = (array) => {
  if (array.length === 0) {
    return {
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }

  const total = array.reduce((sum, current) => sum + current, 0);
  const average = total / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average: parseFloat(average.toFixed(2)),
    min: min,
    max: max,
    length: array.length,
  };
};
