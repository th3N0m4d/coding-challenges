import twoSum from "./two-sum";

describe("LeetCode Challenges", () => {
  it.each`
    nums                    | target | result
    ${[2, 7, 11, 15]}       | ${9}   | ${[0, 1]}
    ${[3, 2, 4]}            | ${6}   | ${[1, 2]}
    ${[3, 3]}               | ${6}   | ${[0, 1]}
    ${[2, 7, 11, 15]}       | ${9}   | ${[0, 1]}
    ${[-3, 4, 3, 90]}       | ${0}   | ${[0, 2]}
    ${[-1, -2, -3, -4, -5]} | ${-8}  | ${[2, 4]}
  `("should return $target", ({ nums, target, result }) => {
    expect(twoSum(nums, target)).toEqual(result);
  });
});
