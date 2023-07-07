"use strict";
/*
                控制流分析
    控制流分析，通过控制代码，来使一部分代码不可达
      如：控制函数中的 return 的放置位置来使后续代
    码不可达，以此来缩小数据类型，借此类型来对数据进行操作
*/
function example1() {
    let x;
    x = Math.random() < 0.5;
    console.log("Math.random() < 0.5", x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log("if", x);
    }
    else {
        x = 100;
        console.log("else", x);
    }
    return x;
}
let x1 = example1();
x1 = "hello";
x1 = 100;
