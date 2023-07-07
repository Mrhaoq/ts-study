"use strict";
/*
                真值缩小
    如果需要进行真空判断时，以下值会被默认转换成 false
      0
      NaN
      ''
      0n          (bigint 零的版本)
      null
      undefined

  
*/
console.log(Boolean("hello"));
console.log(!!"world");
console.log(typeof null);
console.log(typeof []);
console.log([] instanceof Array);
let [a, b] = [2, 3];
console.log(a);
// function printAll(strs: string | string[] | null) {
// 	if (strs) {
// 		if (typeof strs === "object") {
// 			for (const s of strs) {
// 				console.log(s);
// 			}
// 		} else if (typeof strs === "string") {
// 			console.log(strs);
// 		} else {
// 			// ...
// 		}
// 	}
// }
// printAll("s");
