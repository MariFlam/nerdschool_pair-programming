const exercise1 = require("./exercise-1");


describe("fizzBuzzRange", () => {

  test("verify that the length of returned array is equal to max", () => {
    const result = exercise1.fizzBuzzRange(5)
    expect(result.length).toBe(5);
  });

  test("Array content should be equal", () => {
    expect([1, 2, "hello"]).toEqual([1, 2, "hello"]);
  })

  test("please name me as well", () => {
    const correctResult = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
      16,
      17,
      "Fizz",
      19,
      "Buzz"
    ];
    const result = exercise1.fizzBuzzRange(20)
    expect(result).toEqual(correctResult);
    // Some test calling exercise1.fizzBuzzRange(someinput)

  });
});
