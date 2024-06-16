const { glob, globSync } = require("glob");

const a = globSync("**/*.js", {
  ignore: ["node_modules/**"],
});
console.log(a);
