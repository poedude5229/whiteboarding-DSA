/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      // Iterate through numbers
        let complement = target - nums[i];
        // Find complement, see if nums includes it
    if (nums.includes(complement) && nums.indexOf(complement) !== i) {
      return [nums.indexOf(complement), i];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
