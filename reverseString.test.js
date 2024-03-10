import { reverseString } from './reverseString';

test('reverseString', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString('h')).toBe('h');
  expect(reverseString('hello world')).toBe('dlrow olleh');
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});
