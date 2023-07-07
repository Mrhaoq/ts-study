/**
 *            优化编译
 *  1、解决 TS 和 JS 冲突问题
 *      tsc --init 生成配置文件
 *
 *  2、自动编译
 *      tsc --watch
 *
 *  3、发出错误
 *      tsc -noEmitOnError hello.ts
 *        正常情况如果使用 tsc --watch 进行编译，出现
 * 报错也会正常编译为 js 文件，如果不要报错进行编译，可
 * 以加上此指令
 */
const fn = function (str: string) {};
fn("");
