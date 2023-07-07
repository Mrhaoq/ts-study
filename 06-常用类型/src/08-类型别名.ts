/* 
            类型别名
    我们使用一个相同的类型时需要反复定义，这样很麻烦，
  我们可以单独定义一个类型进行反复使用，我们可以叫做类型别名
*/
// 定义类型别名 使用 type 开头
type Point = {
	x: number;
	y: number;
};
function printCoord(pt: Point) {
	console.log(pt);
}
printCoord({ x: 1, y: 2 });

type ID = number | string;
function printId(id: ID) {
	console.log(id);
}
printId(100);
printId("hello");

type UserInputSanitizedString = string;
function sanitizedInput(str: string): UserInputSanitizedString {
	return str.slice(0, 2);
}
let userInput = sanitizedInput("hello");
// 此处会联系上下文自动给 userInput 赋 string 类型
// userInput = 1; // 不能将类型“number”分配给类型“string”。
