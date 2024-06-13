/** spwan流式 更适合耗时任务 比如npm install 需要不断日志 */
/** exec 适合耗时比较小的任务 */

const cp = require("child_process");
const { log } = require("console");
const path = require("path");

/** 运行一个命令 主要执行shell */
cp.exec(
  "ls -al|grep node_modules",
  {
    cwd: process.cwd(), //cwd()表示当前执行路径 即终端运行命令的路径
  },
  function (err, stdout, stderr) {
    // log(err);
    // log(stdout);
    // log(stderr);
  }
);
/** 运行一个文件 */
cp.execFile(
  path.resolve(__dirname, "test.shell"),
  ["-al"],
  function (err, stdout, stderr) {
    // log("2", err);
    // log("2", stdout);
    // log("2", stderr);
  }
);
/** exec exfile的底层函数 没有回调功能 返回子进程 */
/** 为什么不是npm install 写在第一个地方 因为原理是找到npm的执行文件 npm install 不是可执行文件 */
// const child = cp.spawn("npm", ["install"], {
//   cwd: process.cwd(),
// });
// /** 监听回调来拿到回调数据 流式的方式*/
// child.stdout.on("data", (chunk) => {
//   log("out", chunk.toString());
// });
// child.stderr.on("data", (chunk) => {
//   log("err", chunk.toString());
// });
// console.log(child.pid, process.pid);

/** fork  用node执行引入的文件  */
/** 主进程通过child来发送和监听消息 子进程通过process来发送和监听消息 */
/** 适用于耗时操作 */
const child = cp.fork(path.resolve(__dirname, "child.js")); //fork会启动子进程 和exec/execFile不一样 他们都是在一个进程
// console.log("id", process.pid);

child.send("hello this is main pid", () => {
  //child.disconnect(); //发完消息后直接关闭通信 避免等待
});
child.on("message", (message) => {
  log(message);
});

/** 还有对应的同步方法 execSync/execFileSync/spawnSync 用法同理 */
const ret = cp.execSync("ls -al|grep node_modules"); //拿到一个Buffer
log(ret.toString());
const ret2 = cp.execFileSync("ls", ["-al"]); //拿到一个Buffer
log(ret2.toString());
const ret3 = cp.spawn("ls", ["-al"]); //拿到一个对象
log(ret3.stdout.toString());