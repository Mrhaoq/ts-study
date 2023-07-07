/*
                        接口
    接口通过 interface 关键字定义，后面不需要加等号，直接加括号
      后面变量首字母一般使用大写

              类型别名和接口的区别
    
*/
// 扩展接口
// 通过继承扩展
/* 
interface Animal {
	name: string;
}
// 通过 继承 扩展 Bear
interface Bear extends Animal {
	honey: boolean;
}
const bear: Bear = {
	name: "lisi",
	honey: true,
}; 
*/

// 通过类型别名扩展
/* 
type Animal = {
	name: string;
};
// 在类型别名中 通过 交叉点扩展，关键字符 &
type Bear = Animal & {
	honey: boolean;
};
const bear: Bear = {
	name: "lisi",
	honey: true,
};
*/

// 向现有的类型添加字段
/* interface MyWindow {
	count: number;
}
interface MyWindow {
	title: string;
}
const w: MyWindow = {
	title: "123",
	count: 12,
};
 */

// 类型创建后是不能扩展的(不能修改)
/* // 标识符“MyWindow”重复。
type MyWindow = {
	name: string;
};
// 标识符“MyWindow”重复。
type MyWindow = {
	count: boolean;
};
 */
