/* 
          文字类型
    
*/

let testString = "Hello World";
testString = "大前端";

// const constantString = "Hello World";
// constantString = ""; // 无法分配到 "constantString" ，因为它是常数。

// 我们可以不使用 const 关键字给字符串指定固定值
let x: "hello" = "hello";
// x = ""; // 不能将类型“""”分配给类型“"hello"”。

function printText(s: string, alignment: "left" | "right" | "center") {
	console.log(s, alignment);
}
printText("hello", "center");
// printText("hello", "center2"); // 类型“"center2"”的参数不能赋给类型“"left" | "right" | "center"”的参数。

function compare(a: string, b: string): 0 | 1 | -1 {
	return a == b ? 0 : a > b ? 1 : -1;
}

interface Options {
	width: number;
}
function configure(x: Options | "auto") {}
configure({ width: 100 });
configure("auto");
