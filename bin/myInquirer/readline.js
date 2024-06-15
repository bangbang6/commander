/** 每行读区输入流的数据 */
const { log } = require("console");
const readline = require("readline");

// function* g() {
//   const a = yield;
//   log(a);
//   const b = yield;
//   log(b);
// }
// const function1 = g();
// function1.next();
// function1.next(2); //a=2
// return;

// const rl = readline.createInterface({
//   input: process.stdin, //系统输入流
//   output: process.stdout, //系统输出流
// });
// rl.question("your name :", (answer) => {
//   console.log(answer); //监听回车行为 表示这个question结束
//   rl.close(); //关闭这个运行
// });

//手写readline核心实现
function stepRead(cb) {
  const input = process.stdin;
  const output = process.stdout;
  let line = "";

  function onkeypress(s) {
    output.write(s);
    line += s;
    switch (s) {
      case "\r":
        input.pause();
        input.setRawMode(false);
        cb(line);
        break;
    }
  }
  eventKeypressEvents(input);
  input.on("keypress", onkeypress);
  input.setRawMode(true); //原生模式 所有字符的监控由我们自己控制 终端不进行控制
  input.resume();
}

stepRead((s) => {
  console.log("answer is ", s);
});
function eventKeypressEvents(stream) {
  function onData(chunk) {
    g.next(chunk.toString());
  }
  const g = emitKeys(stream);
  g.next();
  stream.on("data", onData);
}
function* emitKeys(stream) {
  while (true) {
    // 执行mac-mw-cli-test2 会卡在这个yield方法不动 直到输入字符 被ondata监听到走next 走到/r退出input

    let ch = yield;
    stream.emit("keypress", ch);
  }
}
