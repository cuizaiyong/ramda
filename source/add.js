import _curry2 from './internal/_curry2.js';


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
// 柯里化 add 函数
// _curry2 表示支持两个参数的柯里化函数
/**
 *    R.add(2, 3)         // => 5
 *    R.add(7)(10)        // => 17
 *    R.add(7, R.__)(10)  // => 17
 */
var add = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});
export default add;
