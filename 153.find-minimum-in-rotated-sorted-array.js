/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1,2,3,4,5,6,7,8 无需处理，第一个值就是最小值
// 5,6,7,8,1,2,3,4 需要处理，最小值在中间
var findMin = function (nums) {
  const len = nums.length;
  if (!len) return null;
  if (len === 1) return nums[0];
  let L = 0,
    R = len - 1,
    mid;
  // 符合第一种情况，最小值在第一个值
  if (nums[R] > nums[L]) return nums[0];
  while (L <= R) {
    mid = Math.floor(L + (R - L) / 2);
    // 后一个值小于中间值，后一个值就是最小值
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    // 前一个值大于中间值，中间值就是最小值
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    // 当前值大于第一个值，最小值在右边
    if (nums[mid] > nums[0]) {
      L = mid + 1;
      // 当前值小于第一个值，最小值在左边
    } else {
      R = mid - 1;
    }
  }
  return null;
};
// @lc code=end
