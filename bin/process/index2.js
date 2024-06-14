const cp = require("child_process");
const { log } = require("console");

cp.exec("ls -al ", (err, out) => {
  log(out);
});
