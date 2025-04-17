const romanNumeralMap = new Map([
  ["I", 1],
  ["IV", 4],
  ["V", 5],
  ["IX", 9],
  ["X", 10],
  ["L", 50],
  ["XL", 40],
  ["XC", 90],
  ["C", 100],
  ["CD", 400],
  ["D", 500],
  ["CM", 900],
  ["M", 1000],
]);

function toInteger(romanNumeral: string) {
  return romanNumeralMap.get(romanNumeral) || 0;
}

function sumDigits(previousValue: number, currentValue: number) {
  return previousValue + currentValue;
}

export function romanToInt(romanNumeral: string): number | undefined {
  return romanNumeral
    .match(/(CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I)/g)
    ?.map<number>(toInteger)
    .reduce<number>(sumDigits, 0);
}
