const npmInstall = require("npminstall");
const path = require("path");
const userHome = require("user-home");

npmInstall({
  root: path.resolve(userHome, ".mac-mw-cli-test2"), //模块路径
  storeDir: path.resolve(userHome, ".mac-mw-cli-test2") + "node_modules", //实际存储的未知
  registry: "http://registry.npmjs.org",
  pkgs: [{ name: "foo", version: "~1.0.0" }],
});
