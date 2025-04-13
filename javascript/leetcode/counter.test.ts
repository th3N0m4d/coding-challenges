import { createCounter } from "./counter";

describe("#2620 Counter", () => {
  it.each`
    n     | calls                                       | expected
    ${10} | ${["call", "call", "call"]}                 | ${[10, 11, 12]}
    ${-2} | ${["call", "call", "call", "call", "call"]} | ${[-2, -1, 0, 1, 2]}
  `("should increase counter for $n", ({ n, calls, expected }) => {
    // Arrange
    const counter = createCounter(n);
    let result: number[] = [];

    // Act
    result = calls.map(counter);

    // Assert
    expect(result).toEqual(expected);
  });
});
