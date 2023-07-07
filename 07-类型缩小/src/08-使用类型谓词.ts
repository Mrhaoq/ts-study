/* 
                    使用类型谓词
      我们已经可以使用 JavaScript 来对代码进行缩小操作了，
    但是有时我们更想直接的控制整个代码的类型变化，为了定义
    一个用户定义的类型保护，我们只需要定义一个函数，让他的
    返回值是一个类型谓词就好了
*/

/**
 *    此函数定义的返回值 pet is Fish 就是所谓的类型谓词
 *
 * 类型谓词的格式 paramterName is Type
 *    paramterName 一定是在函数中存在的参数
 *
 */
type Fish = {
	name: string;
	swim: () => void;
};
type Bird = {
	name: string;
	fly: () => void;
};

// 类型守卫
function isFish(pet: Fish | Bird): pet is Fish {
	//   如果 pet 中有 swim 这个属性，那么 pet 就是 Fish 这个类型
	// 否则就是 bird 这个类型
	return (pet as Fish).swim !== undefined;
}

function getSmallpet(): Fish | Bird {
	let fish: Fish = {
		name: "sharkey",
		swim: () => console.log("咕噜噜噜"),
	};
	let bird: Bird = {
		name: "sparrow",
		fly: () => {},
	};
	return true ? bird : fish;
}
let pet = getSmallpet();
console.log(pet);

if (isFish(pet)) {
	pet.swim();
} else {
	pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallpet(), getSmallpet(), getSmallpet()];
const underWater1: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
	if (pet.name === "frog") {
		return false;
	}
	return isFish(pet);
});
