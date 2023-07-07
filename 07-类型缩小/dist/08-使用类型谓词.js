"use strict";
/*
                    使用类型谓词
      我们已经可以使用 JavaScript 来对代码进行缩小操作了，
    但是有时我们更想直接的控制整个代码的类型变化，为了定义
    一个用户定义的类型保护，我们只需要定义一个函数，让他的
    返回值是一个类型谓词就好了
*/
// 类型守卫
function isFish(pet) {
    //   如果 pet 中有 swim 这个属性，那么 pet 就是 Fish 这个类型
    // 否则就是 bird 这个类型
    return pet.swim !== undefined;
}
function getSmallpet() {
    let fish = {
        name: "sharkey",
        swim: () => console.log("咕噜噜噜"),
    };
    let bird = {
        name: "sparrow",
        fly: () => { },
    };
    return true ? bird : fish;
}
let pet = getSmallpet();
console.log(pet);
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallpet(), getSmallpet(), getSmallpet()];
const underWater1 = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter(() => { });
