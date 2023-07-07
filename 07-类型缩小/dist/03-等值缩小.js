"use strict";
/*
            等值缩小
      
*/
function example(x, y) {
    /*
  x.toLowerCase();
    // 类型“string | number”上不存在属性“toLowerCase”。
    // 类型“number”上不存在属性“toLowerCase”。
    y.toUpperCase();
    // 类型“string | boolean”上不存在属性“toUpperCase”。
    // 类型“false”上不存在属性“toUpperCase”。
  */
    // 等值缩小
    // 等值判断 由于 string 是 x, y 都有的一种类型，所以 TypeScript 知道程序会走第一个分支
    if (x === y) {
        x.toLowerCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        else {
            // ...
        }
    }
}
function multiplyValue(container, factor) {
    // 此处仅用一个不等就可以过滤出两个为空的值
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyValue({ value: 5 }, 6);
multiplyValue({ value: undefined }, 6);
multiplyValue({ value: null }, 6);
