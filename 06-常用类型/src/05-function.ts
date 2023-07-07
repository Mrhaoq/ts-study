/* 
          函数的类型注解
*/
/**
 * @param name string
 * string ：参数类型注释
 * void ：返回值类型注释
 *  如果不给 函数形参定义类型，那么它将拥有一个隐式
 * 参数类型 any
 */
function greet(name: string): void {
	console.log("hello," + name);
}

greet("");

function getFavoriteNumber(a: string, b: object): number {
	return 1;
}

const names = ["小千", "小峰", 1];
/*  
    即使我们没有对 forEach 的形参进行类型注释，TypeScript 也会
  默认用数组的类型来推断出 item 的类型，这个过程我们称之为上下文类型
  
*/
names.forEach(item => {
	console.log(item);
	return;
});
