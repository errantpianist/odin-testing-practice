import analyzeArray from './analyzeArray';

test('analyzeArray', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
  expect(analyzeArray([1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 2,
  });
  expect(analyzeArray([1, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 2,
  });
  expect(analyzeArray([0, 2])).toEqual({
    average: 1,
    min: 0,
    max: 2,
    length: 2,
  });
  expect(analyzeArray([112, 43, 19])).toEqual({
    average: 58,
    min: 19,
    max: 112,
    length: 3,
  });
  expect(analyzeArray([-1, 2, -3, 4, -5])).toEqual({
    average: -0.6,
    min: -5,
    max: 4,
    length: 5,
  });
  expect(analyzeArray([1, 1, 2]).average).toBeCloseTo(1.3333333333333333);
  expect(analyzeArray([])).toEqual({
    average: Math.NaN,
    min: Math.NaN,
    max: Math.NaN,
    length: 0,
  });
});
