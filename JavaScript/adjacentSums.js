function adjacentSums(nums) {
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    res.push(nums[i] + nums[i + 1]);
  }
  return res;
}

console.log(adjacentSums([3, 8, 7, 1]));
