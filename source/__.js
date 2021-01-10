/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @name __
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
// 占位标记
/**
 * Ramda对所有的函数做了柯里化处理，_curry1 _curry2 _curry3 _curry4
 * curry函数通过_isPlaceholder来判断占位符， 具体实现
 * export default function _isPlaceholder(a) {
      return a != null &&
            typeof a === 'object' &&
            a['@@functional/placeholder'] === true;
   }
 * 举个例子 curry1Add = R.add(1, R.__) 会返回一个函数 curry1Add 表示 传过一个参数
 * 的 柯里化函数  curry1Add(2) => 1 + 2 = 3
 * 
 */
export default {'@@functional/placeholder': true};
