/* 
                  in 操作符缩小
      JavaScript 有一个操作符用来确定对象是否具有某个
    名称的属性，这个运算符就是 in 运算符
      TypeScript 也用了这个运算符，以此来缩小潜在类型的范围
          如： 'value' in x
            in x 这里的 value 是字符串文字，x 是联合类型
*/

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void; fly?: () => void };

// function move(animal: Fish | Bird | Human) {
// 	if ("swim" in animal) {
// 		// 使用类型断言，将之缩小为更小的类型
// 		return (animal as Fish).swim();
// 	}

// 	// 使用类型断言，将之缩小为更小的类型
// 	return (animal as Bird).fly();
// }
