/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   // 思路1: 动态规划
//   if (n === 0) {
//     return [];
//   }
//   const dp = new Map();
//   const dp0 = [""];
//   dp.set(0, dp0);
//   for (let i = 1; i <= n; i++) {
//     const cur = [];
//     // f0 = [''];
//     // f1 = ['(f0)'];
//     // f2 = ['(f0)f1', '(f1)f0'];
//     // f3 = ['(f0)f2', '(f1)f1', '(f2)f0']; (5个)
//     // f4 = ['(f0)f3', '(f1)f2', '(f2)f1', '(f3)f0']; (14个)
//     for (let j = 0; j < i; j++) {
//         const str1 = dp.get(j);
//         const str2 = dp.get(i - 1 - j);
//         for (const k1 in str1) {
//             for (const k2 in str2) {
//                 // 枚举右括号的位置
//                 cur.push("(" + str1[k1] + ")" + str2[k2]);
//             }
//         }
//     }
//     dp.set(i, cur);
//   }
//   return dp.get(n);
// };

var generateParenthesis = function (n) {
  function dfs(curStr, left, right, list) {
    if (left === 0 && right === 0) {
      return [...list, curStr];
    }
    if (left > right) {
      return list;
    }

    let newList = list;
    if (left > 0) {
      newList = dfs(`${curStr}(`, left - 1, right, newList);
    }

    if (right > 0) {
      newList = dfs(`${curStr})`, left, right - 1, newList);
    }

    return newList;
  }

  if (n === 0) {
    return [];
  }
  return dfs('', n, n, []);
};
// @lc code=end
