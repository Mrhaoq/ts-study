/* 
          数组类型
      声明方式有两种
  1.在中括号前加一个类型
      type[]
  2.使用大写 A 开头的 Array 关键字后加一个尖括号包裹住类型(泛型写法)
      Array<type>
*/

// 数字类型的数组，数组只允许出现数字
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
