import Calculator from './calculator';

const calculator = new Calculator();

test('adding numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-3, 3)).toBe(0);
});

test('subtracting numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(-3, 3)).toBe(-6);
});

test('dividing numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(12, 3)).toBe(4);
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
  expect(calculator.divide(5, 0)).toBe(Infinity);
  expect(calculator.divide(7.5, 2.5)).toBeCloseTo(3);
});

test('multiplying numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(-3, 3)).toBe(-9);
  expect(calculator.multiply(0, 3)).toBe(0);
  expect(calculator.multiply(1.5, 2)).toBeCloseTo(3);
});
