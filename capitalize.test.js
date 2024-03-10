import capitalize from './capitalize';

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('')).toBe('');
  expect(capitalize('h')).toBe('H');
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('hello world!')).toBe('Hello world!');
  expect(capitalize('123')).toBe('123');
});
