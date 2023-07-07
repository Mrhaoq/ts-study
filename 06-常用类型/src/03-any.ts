/* 
        any 类型
    any 可以赋任意类型的值、
    使用 TypeScript 时应尽量避免使用 any 类型，它
  不会对任何类型进行检查，这样就失去了使用 
  TypeScript 的意义
*/
let obj: any = {
	x: 0,
};
obj.foo(); // 报错，不存在 foo() 方法
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
console.log(n);
