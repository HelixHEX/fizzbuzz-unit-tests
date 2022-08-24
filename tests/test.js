const fb = require("../fizzbuzz");

//test constancts (FIZZ, BUZZ, FIZZBUZZ)
test("FIZZ", () => {
  expect(fb.FIZZ).toBe("fizz");
});

test("BUZZ", () => {
  expect(fb.BUZZ).toBe("buzz");
});

test("FIZZBUZZ", () => {
  expect(fb.FIZZBUZZ).toBe("fizzbuzz");
});

//test for isFizzy(n)
test("isFizzy", () => {
  expect(fb.isFizzy(3)).toBe(true);
  expect(fb.isFizzy(5)).toBe(false);
  expect(fb.isFizzy(15)).toBe(true);
  expect(fb.isFizzy(9)).toBe(true);
  expect(fb.isFizzy(200)).toBe(false);
});

//test for isBuzzy(n)
test("isBuzzy", () => {
  expect(fb.isBuzzy(3)).toBe(false);
  expect(fb.isBuzzy(5)).toBe(true);
  expect(fb.isBuzzy(7)).toBe(false);
  expect(fb.isBuzzy(9)).toBe(false);
  expect(fb.isBuzzy(200)).toBe(true);
});

//test fizzyBuzzy(n)
test("fizzyBuzzy", () => {
  expect(fb.fizzyBuzzy(3)).toBe("fizz");
  expect(fb.fizzyBuzzy(5)).toBe("buzz");
  expect(fb.fizzyBuzzy(15)).toBe("fizzbuzz");
  expect(fb.fizzyBuzzy(30)).toBe("fizzbuzz");
  expect(fb.fizzyBuzzy(2)).toBe("");
});

//test fizzBuzz(count)
test("fizzBuzz", () => {
  
  expect(fb.fizzBuzz(20)).toStrictEqual({
    buzz: 3,
    count: 20,
    fizz: 5,
    fizzBuzz: 1,
  });
  expect(fb.fizzBuzz(20)).toStrictEqual({
    buzz: 3,
    count: 20,
    fizz: 5,
    fizzBuzz: 1,
  });
  expect(fb.fizzBuzz(50)).toStrictEqual({
    buzz: 7,
    count: 50,
    fizz: 13,
    fizzBuzz: 3,
  });
});