import { flattenArray } from "./flatten-array";

describe("#2625 Flatten Deeply Nested Array", () => {
  it("should not flatten array", () => {
    const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 0;
    expect(flattenArray(array, n)).toEqual(array);
  });

  it("should flatten array up to 1 level", () => {
    const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const output = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];
    const n = 1;

    expect(flattenArray(array, n)).toEqual(output);
  });

  it("should return an empty array for empty arrays", () => {
    const array = [[], [], [], [], [], [], [], [], [], []];
    const n = 1000;

    expect(flattenArray(array, n)).toHaveLength(0);
  });
});
