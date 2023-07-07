/* 
                instanceof 操作符缩小
      x instanceof Foo
      JavaScript 中有一个运算符 instanceof 用来检测
    一个值是否在另外一个值的原型链上
      instanceof 也是一个类型保护，TypeScript 在由 instanceof
    保护的分支中来实现类型缩小
*/

//
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

logValue(new Date());
logValue("hello ts");
