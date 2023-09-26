/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let half = Math.floor(n / 2);
  let mid = Math.floor(n / 2);
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let x = (y = 0);
  let offset = 1;
  let val = 1;
  while (half--) {
    let i = x,
      j = y;
    for (; j < n - offset; j++) {
      result[i][j] = val++;
    }
    for (; i < n - offset; i++) {
      result[i][j] = val++;
    }
    for (; j > y; j--) {
      result[i][j] = val++;
    }
    for (; i > x; i--) {
      result[i][j] = val++;
    }
    x++;
    y++;
    offset++;
  }
  if (n % 2 === 1) {
    result[mid][mid] = val++;
  }

  return result;
};
// @lc code=end
