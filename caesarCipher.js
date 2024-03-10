export default function caesarCipher(input, shift) {
  let output = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    const index = letters.indexOf(char);
    if (index === -1) {
      output += char;
    } else {
      const newIndex = (index + shift) % letters.length;
      output +=
        input[i] === input[i].toUpperCase()
          ? letters[newIndex].toUpperCase()
          : letters[newIndex];
    }
  }
  return output;
}
