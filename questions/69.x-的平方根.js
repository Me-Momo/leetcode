/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 * ✨解法1 二分法. 🐶：当 a >= 4, 一个数的平方根最多不会超过它的一半 => (a/2)^2 >= a
 * todo 牛顿迭代法
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) {
    return 0;
  }
  let left = 1;
  let right = x;
  while (left < right) {
    const mid = Math.floor((left + right)/ 2 );
    if (mid ** 2 === x || mid === left) {
      left = right = mid;
    } else if (mid ** 2 > x) {
      right = mid;
    } else {
       left = mid;
    }
  }
  return left;
};
// @lc code=end
