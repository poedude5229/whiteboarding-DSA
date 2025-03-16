// Write a function sumNumbers that takes an array of numbers
// and returns the sum of all the numbers.

function sumNumbers(nums) {
  return nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sumNumbers([1, 2, 3, 4]));
