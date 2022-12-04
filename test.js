const { add } = require('./arithmetics');
const { substract } = require('./arithmetics');
const { multiply } = require('./arithmetics');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 5 - 3 to equal 2', () => {
  expect(substract(5, 3)).toBe(2);
});

test('multiply 2 * 4 to equal 8', () => {
  expect(multiply(2, 4)).toBe(8);
});