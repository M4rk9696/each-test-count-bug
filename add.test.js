test.each(
  [
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3]
  ],
  "returns the result of adding %d to %d",
  async (a, b, expected) => {
    expect(a + b).toBe(expected);
  }
);