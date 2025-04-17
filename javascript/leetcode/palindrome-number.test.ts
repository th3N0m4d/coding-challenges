import { isPalindrome } from "./palindrome-number";

describe("#9 Palindrome Number", () => {
  describe("Happy Path", () => {
    const testCases: number[] = [1, 121, 111, 11011, 222];
    test.each(testCases)('should return "true" for number "%d"', (n) => {
      expect(isPalindrome(n)).toBeTruthy();
    });
  });

  describe("Edge Cases", () => {
    it.each`
      x       | expected
      ${-121} | ${false}
      ${10}   | ${false}
      ${1}    | ${true}
      ${0}    | ${true}
    `('should return "$expected" for number $x', ({ x, expected }) => {
      expect(isPalindrome(x)).toBe(expected);
    });
  });
});
