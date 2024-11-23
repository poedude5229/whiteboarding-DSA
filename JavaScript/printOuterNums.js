const printOuterNumsFirst = (nums) => {
  if (nums.length === 0) return;

  let num;
  if (nums.length % 2 === 0) {
    num = nums.shift();
  } else {
    num = nums.pop();
  }
  console.log(num);
  printOuterNumsFirst(nums);
};

printOuterNumsFirst([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("*********************************");
printOuterNumsFirst([21, 4, 6, 93, 78]);
// 78
// 21
// 93
// 4
// 6
