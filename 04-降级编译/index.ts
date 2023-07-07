/**
 *                降级编译
 *    默认情况下，ts 的编译会被编译为 ES6 版本语法，这样会出现很多兼容问题，
 * 我们需要在 tsconfig.json 中将 target 改为 ES5 这样就会编译为 ES5语法
 *
 */
let s = "现在时间";
function fn(str, date) {
	return `${str} + ;${date}`;
}
fn(s, new Date());
function fn1() {
	return new Date();
}
fn1();
