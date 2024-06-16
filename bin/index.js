#!/usr/bin/env node

const commander = require("commander");
const pkg = require("../package.json");
//获取脚手架单例
const program0 = commander.program;
// 自己手动初始化脚手架例
const program = new commander.Command();
// require("./process/index");
require("./ejs/glob");
return;
program
  .name(Object.keys(pkg.bin)[0])
  .usage("<command> [options]")
  .version(pkg.version)
  .option("-d --debug", "是否开启调试模式", false)
  .option("-e --env <env>", "获取环境变量名称");

// console.log(program.env); //获取options的参数
// console.log(program.opts()); //获取所有的options

// 注册命令
const clone = program.command("clone <source> [destination]"); //返回命令对象 destination可选 source必填
clone
  .description("clone a respoitory")
  .option("-f,--force", "是否强制拷贝", false)
  /** cmdObj是option的参数对象 其他的命令参数平铺在前面 */
  .action((source, destination, cmdObj) => {
    console.log("clone", source, destination, cmdObj.force);
  });
// addCommand 注册一个子脚手架 可以对命令进行分组
const service = new commander.Command("service");
program.addCommand(service); //完成子脚手架注册

// 子脚手架注册命令
service
  .description("start start at some port") //mac-mw-cli-test2  service start 8001调用
  .command("start [port]")
  .action((port) => {
    console.log("serice start", port);
  });

service
  .command("stop ")
  .description("stop") //mac-mw-cli-test2  service start 8001调用
  .action(() => {
    console.log("serice stop");
  });

/** 监听所有的命令输入1 */
program
  .arguments("[cmd] [options]")
  .description("test command", {
    cmd: "command to  run",
    options: "options to command",
  })
  .action((cmd, options) => {
    console.log(cmd, options);
  });
/** 多个脚手架之间调用 */
program
  .command("install [name]", "install package", {
    executableFile: "mac-mw-cli-dev",
    hidden: true, //-h中看不到这个命令
  })
  .alias("i"); //相当于执行 mac-mw-cli-dev

/** 自定义help信息 */
program.helpInformation = () => "";
/** program内部集成 eventEmiter 所以都是监听 */
program.on("--help", () => {
  console.log("your help info");
});

/** 实现debug模式 */
program.on("option:debug", () => {
  if (program.debug) {
    process.env.LOG_LEVEL = "verbose";
  }
});

/** 未知命令监听2 */
program.on("command:*", (obj) => {
  console.error("未知的命令" + obj[0]);
  const avaliableCommands = program.commands.map((cmd) => cmd.name());
  console.log("可用的命令" + avaliableCommands.join(","));
});

program.parse(process.argv);
