/**
 * @file 了解哪一种 for 循环或迭代器适合我们的需求，防止我们犯下一些影响应用性能的低级错误。
 * @see https://juejin.cn/post/6930973929452339213
 * @created 2021-05-01
 */

/**
 * 每种方法纸执行 10 次
 * @param func
 * @param name loop 名称
 */
function timeCounter(func: Function, name: string = ''): void {
  const counterLabel = `${name} ⏳`;
  console.time(counterLabel);
  for (let i = 0; i < 10; i++) {
    func();
  }
  console.timeEnd(counterLabel);
}

const million = 100000000;
const arr = Array(million).map(() => Math.floor(Math.random() * 9));

/**
 * ✨ 数据量只是毛估
 * 
 * 🌰  数量级别在 80000 以下的时候: forEach (0.346ms) > for(1.464ms) > for 倒序 > for...of
 * 🌰  数量级别在 10 亿以上的时候: for 倒序 > for > for...of > forEach
 */
// ⏳  53.614ms(10 亿数据量 单次)
timeCounter(() => {
  for (let i = arr.length; i > 0; i--) {}
}, 'for 倒序');

// ⏳ 66.125ms
timeCounter(() => {
  for (let i = 0; i < arr.length; i++) {}
}, 'for');

// ⏳ 2.272s
timeCounter(() => {
  arr.forEach((v) => v);
}, 'forEach');

// ⏳ 2.801s
timeCounter(() => {
  for (const v of arr) {
  }
}, 'for...of');
