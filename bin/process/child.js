// console.log("child-id", process.pid);

process.on("message", (msg) => {
  console.log(msg);
});
process.send("this is child message");
