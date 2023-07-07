"use strict";
function printCoord(pt) {
    console.log(pt);
}
printCoord({ x: 1, y: 2 });
function printId(id) {
    console.log(id);
}
printId(100);
printId("hello");
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput("hello");
// 此处会联系上下文自动给 userInput 赋 string 类型
// userInput = 1; // 不能将类型“number”分配给类型“string”。
