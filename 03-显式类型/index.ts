/**
 *                显式类型
 * 显示类型：手工给变量或参数定义类型
 */

let s = "现在时间";

function fn(str: string, date: Date) {
	return `${str} + ;${date}`;
}
fn(s, new Date());

function fn1() {
	return new Date();
}
fn1();
