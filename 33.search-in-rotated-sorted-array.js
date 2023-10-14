/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 2,3,4,5,6,7,8,1
var search = function (nums, target) {
  const len = nums.length;
  if (!len) return -1;
  if (len === 1) return nums[0] === target ? 0 : -1;
  let L = 0,
    R = len - 1,
    mid;
  while (L <= R) {
    mid = Math.floor(L + (R - L) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[L]) {
      if (target >= nums[L] && target < nums[mid]) {
        R = mid - 1;
      } else {
        L = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[R]) {
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
  }
};
// @lc code=end
