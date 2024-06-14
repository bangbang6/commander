const inquirer = require("inquirer");

inquirer
  .prompt([
    /** yes or no */
    // {
    //   type: "confirm",
    //   name: "choice",
    //   message: "your choice",
    //   default: false,
    // },
    /** 列表选择 */
    {
      type: "list",
      name: "choice",
      message: "your choice",
      default: 0, //index
      choices: [
        {
          value: 1,
          name: "sam",
        },
        {
          value: 2,
          name: "sam2",
        },
        {
          value: 3,
          name: "sa3",
        },
      ],
    },
    /** 交互样式不一样而已 */
    // {
    //   type: "rawlist",
    //   name: "choice",
    //   message: "your choice",
    //   default: 0, //index
    //   choices: [
    //     {
    //       value: 1,
    //       name: "sam",
    //     },
    //     {
    //       value: 2,
    //       name: "sam2",
    //     },
    //     {
    //       value: 3,
    //       name: "sa3",
    //     },
    //   ],
    // },
    /** h会撑开 否则展示简写 */
    // {
    //   type: "expand",
    //   name: "choice",
    //   message: "your choice",
    //   default: 0, //index
    //   choices: [
    //     {
    //       key: "R",
    //       value: "red",
    //     },
    //     {
    //       key: "G",
    //       value: "green",
    //     },
    //     {
    //       key: "B",
    //       value: "blue",
    //     },
    //   ],
    // },
    /** 多选 全选 反选 vue-cli的插件选择用的就是这个 */
    // {
    //   type: "checkbox",
    //   name: "choice",
    //   message: "your choice",
    //   default: 0, //index
    //   choices: [
    //     {
    //       value: "R",
    //       name: "red",
    //     },
    //     {
    //       value: "G",
    //       name: "green",
    //     },
    //     {
    //       value: "B",
    //       name: "blue",
    //     },
    //   ],
    // },
    /** 页面看不到 */
    // {
    //   type: "password",
    //   name: "choice",
    //   message: "your choice",
    // },
    // 打开vim编辑器(可以输入比较复杂的内容) 拿到输入的结果
    // {
    //   type: "editor",
    //   name: "choice",
    //   message: "your choice",
    //   default: 0, //index
    //   choices: [
    //     {
    //       value: "R",
    //       name: "red",
    //     },
    //     {
    //       value: "G",
    //       name: "green",
    //     },
    //     {
    //       value: "B",
    //       name: "blue",
    //     },
    //   ],
    // },
    /* Pass your questions in here */
    // {
    //   type: "input",
    //   message: "your name :",
    //   name: "yourname",
    //   default: "no name",
    //   validate: (v) => {
    //     return v.includes("mw");
    //   },
    //   // 仅做展示信息的转化 answers里面的数据还是v
    //   transformer: (v) => {
    //     return "your name is " + v;
    //   },
    //   // 对数据处理 会返回给answers
    //   filter: (v) => {
    //     return v + "is good";
    //   },
    // },
    // {
    //   type: "number",
    //   name: "num",
    //   message: "your id : ",
    // },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("answers", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
