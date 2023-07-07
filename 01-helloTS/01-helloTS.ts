/**
 * ts 文件不能直接运行，需要编译为 js 文件后运行
 * 编写一段代码，然后运行 tsc helloTS.ts
 *    tsc (typescript compel)
 */

console.log("Hello TS");

function greet(person: String[], data) {
	console.log(person, data);
}
greet([], "2023-06-02");
