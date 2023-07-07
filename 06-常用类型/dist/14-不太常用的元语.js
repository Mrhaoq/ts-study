"use strict";
/*
              不太常用的元语
      bigint 非常大的整数
      symbol 全局唯一引用

*/
// 当当前 ES版本 低于 2020 时不可用，需在 config.json 中更改目标版本
const oneHundred = BigInt(100);
const anotherHundred = 100n;
// Symbol 的比较
const firstName = Symbol("name");
const secondName = Symbol("name");
// 会直接出现报错
// 此比较似乎是无意的，因为类型“typeof firstName”和“typeof secondName”没有重叠。
// if (firstName == secondName) console.log("false");
