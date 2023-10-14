/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  const len = nums.length;
  if (nums == null || len < 3) return result;
  const sortNum = nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (sortNum[i] > 0) break;
    // 当前这个值和前一个值一样，跳过；不需要重复处理
    if (i > 0 && sortNum[i] == sortNum[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    // 双指针不重叠的时候不断的向中靠拢
    while (L < R) {
      const sum = sortNum[i] + sortNum[L] + sortNum[R];
      if (sum == 0) {
        result.push([sortNum[i], sortNum[L], sortNum[R]]);
        // 当前这个值和前一个值一样，跳过；不需要重复处理
        while (L < R && sortNum[L] == sortNum[L + 1]) L++;
        // 当前这个值和后一个值一样，跳过；不需要重复处理
        while (L < R && sortNum[R] == sortNum[R - 1]) R--;
        // 默认下需要向后退一位
        L++;
        // 默认下需要向前进一位
        R--;
      } else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  return result;
};
// @lc code=end
