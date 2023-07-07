"use strict";
/*
                对象类型
    除了三个基元类型外，最常用的就是对象类型，我们
  可以把任何 JavaScript 中带属性的值都看做对象类型
    要定义对象类型，我们只要列出属性和他的类型即可
*/
// 参数类型注释是 对象类型
/**
 *
 * @param pt object
 * 使用两个类型注解的对象，我们可以使用 逗号或分号 分割
 *
 */
// function printCoord(pt: { x: number; y: number }) {
// 	console.log("pt.x===>>>", pt.x);
// 	console.log("pt.y===>>>", pt.y);
// }
// printCoord({ x: 1, y: 2 });
// 同时，类型也不是必传的
// 如果你不确定是否要传入第二个参数 ，可以在参数后面增加一个 ?
// 如果只定义两个参数，那么这个 函数就不能接收更多参数
function printName(obj) {
    console.log("你的名字是：" + obj.first + obj.last);
    // 直接使用 obj.last 进行字符串方法操作会报错可能未定义
    // obj.last.toLocaleLowerCase()
    // 可以在参数后加 ? 或进行判断
    console.log(obj.last?.toLocaleLowerCase());
    if (obj.last) {
        console.log(obj.last.toLocaleLowerCase());
    }
}
printName({ first: "hao", last: "" });
