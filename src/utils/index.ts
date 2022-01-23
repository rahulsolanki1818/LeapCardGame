const generateRandom = (chars: Record<number, string>, offset: number, forCharCode: number): { key: number, value: string } => {
  const randNo = Math.round((Math.random() * 8) + 1) + offset;
  const char = String.fromCharCode(forCharCode);

  if (!chars[randNo]) {
    return { key: randNo, value: char };
  } else {
    return generateRandom(chars, offset, forCharCode);
  }
}

export const getRandomAlphabets = () => {
  const chars: Record<string, string> = {};
  const charCode = 65;

  for (let code = charCode; code < 73; code++) {
    const { key, value } = generateRandom(chars, 0, code);
    chars[key] = value;
  }

  for (let code = charCode; code < 73; code++) {
    const { key, value } = generateRandom(chars, 8, code);
    chars[key] = value;
  }

  return chars;
}