/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const mLen = matrix.length;
    if (!mLen) { return [] }
    const cLen = matrix[0].length;
    const result = [];
    let T = L = 0; let B = mLen - 1; let R = cLen - 1;
    while (T <= B && L <= R) {
        for (let i = L; i <= R; i++) { result.push(matrix[T][i]) }
        T++;
        for (let i = T; i <= B; i++) { result.push(matrix[i][R]) }
        R--;
        // 避免重复
        if (T > B || L > R) break;
        for (let i = R; i >= L; i--) { result.push(matrix[B][i]) }
        B--;
        for (let i = B; i >= T; i--) { result.push(matrix[i][L]) }
        L++;
    }
    return result;

};
// @lc code=end

