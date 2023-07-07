"use strict";
/*
                类型断言
      有时 TypeScript 不能获取非常详细的类型，这时，
    我们需要进行类型断言来帮助它指定更加详细的类型
      我们可以使用 as 关键字来声明，也可以使用尖括号声明
        使用 as 时，在最后加上更加详细的类型
        使用尖括号时，我们在最前面指定类型

    类型断言会在代码编译时被删除
*/
const myCanvas = document.querySelector("main_canvas");
const myCanvas2 = document.querySelector("main_canvas");
// const x = "hello" as number;
// 类型 "string" 到类型 "number" 的转换可能是错误的，因为两种类型不能充分重叠。
// 如果这是有意的，请先将表达式转换为 "unknown"。
const xy = "hello";
