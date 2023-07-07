/* 
                null undefined
    null 表示不存在
    undefined 表示未初始化的值
*/
let x1: undefined = undefined;
let y1: null = null;
// let z:string = undefined

function doSomething(x: string | null) {
	if (x == null) {
		// doSomsing
	} else {
		console.log(x.toLocaleLowerCase());
	}
}

function liveDangerously(x: number | null) {
	// 类型断言，非空判断
	console.log(x!.toFixed(2));

	console.log(x?.toFixed(2));
}
