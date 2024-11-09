function getProduct(nums) {
  let product = nums[0];
  for (let i = 1; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
}

function highestProduct(numsList) {
  let index = 0;
  for (let i = 0; i < numsList.length; i++) {
    if (getProduct(numsList[i]) > getProduct(numsList[index])) {
      index = i;
    }
  }
  return index;
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 7];
const arrayC = [20, 100, 1, 2];
const arrayD = [1, 3, 2, 300];

console.log(getProduct(arrayA)); // 120
console.log(getProduct(arrayB)); // 21
console.log(getProduct(arrayC)); // 4000
console.log(getProduct(arrayD)); // 1800

console.log(highestProduct([arrayA, arrayB, arrayC, arrayD])); // 2
console.log(highestProduct([arrayA, arrayB])); // 0
console.log(highestProduct([arrayA, arrayD])); // 1
