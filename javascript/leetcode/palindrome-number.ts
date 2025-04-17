/**@note Helpers */
function isNegative(x: number): boolean {
  return x < 0;
}

function endsWithZero(x: number): boolean {
  return x % 10 === 0;
}

function reverseDigits(n: number): number[] {
  let digits: number[] = [];
  let remainder: number = n;

  while (remainder >= 10) {
    // Extracts the last digit of a number
    digits.unshift(remainder % 10);

    // Drop the last digit
    remainder = Math.floor(remainder / 10);
  }

  // Adds the last remaining digit
  digits.unshift(remainder);

  return digits;
}

export function isPalindrome(n: number): boolean {
  // Edge cases
  if (n === 0 || (n > 0 && n < 10)) {
    return true;
  }

  if (isNegative(n) || endsWithZero(n)) {
    return false;
  }

  const reversedDigits = reverseDigits(n);
  let remainder: number = n;

  for (const lastDigit of reversedDigits) {
    if (remainder % 10 === lastDigit) {
      remainder = Math.floor(remainder / 10);
      continue;
    }

    return false;
  }

  return true;
}
