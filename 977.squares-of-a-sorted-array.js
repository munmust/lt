/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let temp = nums.length - 1;
  let result = [];
  for (let i = 0, j = temp; i <= j; ) {
    const iV = Math.pow(nums[i], 2);
    const jV = Math.pow(nums[j], 2);
    if (iV < jV) {
      result[temp--] = jV;
      j--;
    } else {
      result[temp--] = iV;
      i++;
    }
  }
  return result;
};
// @lc code=end
