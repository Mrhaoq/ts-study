/* 
                    分配缩小
    什么是分配缩小
      当我们为任何变量赋值的时候 TypeScript 会检查
    变量的右侧，并适当缩小左侧
*/
// 当前返回值可能返回大于或者小于 0.5 的数，如果小于 0.5
// 那么他就是数字类型，如果大于 0.5 那么他就是字符串类型
// 所以 x 现在是 联合类型
// let num: string | number
let x = Math.random() < 0.5 ? 10 : "hello world";

// let x: number
x = 10;

// let x: string
x = "good bye!";
