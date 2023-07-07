/* 
              枚举
    枚举是 TypeScript 添加到 JavaScript 的一项功能，
  他允许描述一个值，这个值可能是一组命名常量之一，此功能
  是添加到 TypeScript 中和运行时的内容，因此只有你在确
  认需要使用到它的时候使用
    枚举定义方法 
      enum Direction {}
*/

enum Direction {
	Up = 1,
	Down,
	left,
	right,
}
// 设置了默认值后，后面的数值会递增加一
console.log(Direction.Up); // 1
console.log(Direction.Down); // 2
console.log(Direction.left); // 3
console.log(Direction.right); // 4
