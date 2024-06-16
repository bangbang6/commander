const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const html = "<div><%= user.name %></div>";
const options = {
  delimiter: "%", //改变分隔符 % 为?
};
const data = {
  user: {
    name: "mengwan",
    nickName: "<div>mw</div>",
  },
};
const data2 = {
  user: {
    name: "wuyacheng",
  },
};
/** 返回function 用于解析html中的ejs模版 这个适合对template反复使用 */
const template = ejs.compile(html, options);
const compiledTemplate = template(data);
const compiledTemplate2 = template(data2);
// console.log("compiledTemplate", compiledTemplate);
// console.log("compiledTemplate2", compiledTemplate2);

// 第二种用法 直接ejs.render 这个一次性 不适合反复使用
const renderTemplate = ejs.render(html, data, options);
// console.log("renderTemplate", renderTemplate);

ejs.fileLoader = function (filepath) {
  const content = fs.readFileSync(filepath).toString();
  return "<div><%= user.name %></div>" + content;
};
// 第三种用法
const renderedFile = ejs.renderFile(
  path.resolve(__dirname, "template.html"),
  data,
  options
);
// console.log("renderedFile", renderedFile);
ejs.renderFile(
  path.resolve(__dirname, "template.html"),
  data,
  options,
  (err, data) => {
    // console.log("data", data);
  }
);

renderedFile.then((file) => {
  console.log("file", file);
});
