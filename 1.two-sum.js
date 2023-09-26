/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needV = target - nums[i];
    if (!m.has(needV)) {
      m.set(nums[i], i);
    } else {
      return [m.get(needV), i];
    }
  }
  return [];
};
// @lc code=end
