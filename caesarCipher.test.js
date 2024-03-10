import caesarCipher from './caesarCipher';

test('caesarCipher', () => {
  expect(caesarCipher('hello', 0)).toBe('hello');
  expect(caesarCipher('', 0)).toBe('');
  expect(caesarCipher('h', 0)).toBe('h');
  expect(caesarCipher('h', 1)).toBe('i');
  expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme');
  expect(caesarCipher('hello world!', 1)).toBe('ifmmp xpsme!');
  expect(caesarCipher('hello world!', -1)).toBe('gdkkn vnqkc!');
  expect(caesarCipher('123', 1)).toBe('123');
  expect(caesarCipher('hello', 26)).toBe('hello');
  expect(caesarCipher('HeLlO', 1)).toBe('IfMmP');
  expect(caesarCipher('HeLlO', 27)).toBe('IfMmP');
  expect(caesarCipher('!@#$%^&*(*)a', 1)).toBe('!@#$%^&*(*)b');
});
