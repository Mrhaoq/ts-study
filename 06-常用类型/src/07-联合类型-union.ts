/* 
                        联合类型
      TypeScript 允许我们使用多种运算符从现有类型中构建新类型
      联合类型 | ，表示由两个或多个类型组合成的类型，他可能是这些
    类型中一种或多种的值
      联合类型我们又称之为 union 类型，我们通过 | 将多个类型联合起来
*/
// function printId(id: number | string | number[]) {
// 	// console.log(id);
// 	/*
//     console.log(id.toUpperCase());
//     //  类型“string | number”上不存在属性“toUpperCase”。
//     //  类型“number”上不存在属性“toUpperCase”。
//   */
// 	if (typeof id == "string") {
// 		console.log(id.toUpperCase());
// 	} else {
// 		console.log(id);
// 	}
// }
// printId("2");
// printId(1);
// printId([1, 2, 3, 4]);
// printId({ id: 1 }); // 类型“{ id: number; }”的参数不能赋给类型“string | number”的参数。

function welcomePeople(x: string[] | string) {
	if (Array.isArray(x)) {
		console.log(x.join(" and "));
	} else {
		console.log("Welcome lone traveler :" + x);
	}
}

welcomePeople("a");
welcomePeople(["a", "b"]);

// 自动进行类型推断
function getFirstThree(x: number[] | string) {
	return console.log(x.slice(0, 3));
}
getFirstThree("hello world");
getFirstThree([1, 2, 3, 4, 5]);
