/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0, j = 0; j <= nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      result = Math.min(result, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
// @lc code=end
