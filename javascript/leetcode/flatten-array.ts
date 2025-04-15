type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export function flattenArray(
  array: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  // Passing a depth of n=0 will always result in the original array
  if (n == 0) {
    return array;
  }

  return array.reduce<MultiDimensionalArray>((previous, current) => {
    if (Array.isArray(current)) {
      if (current.length === 0) {
        return previous;
      }
      previous.push(...flattenArray(current, n - 1));
      return previous;
    }

    return [...previous, current];
  }, []);
}
