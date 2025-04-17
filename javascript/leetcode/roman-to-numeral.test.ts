import { romanToInt } from "./roman-to-numeral";

describe("#13 Roman to Integer", () => {
  it.each`
    romanNumeral | integer
    ${"I"}       | ${1}
    ${"V"}       | ${5}
    ${"X"}       | ${10}
    ${"L"}       | ${50}
    ${"C"}       | ${100}
    ${"D"}       | ${500}
    ${"M"}       | ${1000}
    ${"III"}     | ${3}
    ${"LVIII"}   | ${58}
    ${"MCMXCIV"} | ${1994}
    ${"MMMXLV"}  | ${3045}
  `(
    "should translate $romanNumeral to $integer",
    ({ romanNumeral, integer }) => {
      expect(romanToInt(romanNumeral)).toBe(integer);
    }
  );
});
