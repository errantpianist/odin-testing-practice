export default function analyzeArray(arr) {
  if (!arr.length) {
    return {
      average: Math.NaN,
      min: Math.NaN,
      max: Math.NaN,
      length: 0,
    };
  }
  return {
    average: arr.reduce((cur, acc) => cur + acc, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
