const inquirer = require("inquirer");
const prompt = require("./lib/questions");
const dept = require("./lib/department");
const empl = require("./lib/employee");
const role = require("./lib/role");

async function init(db) {
  inquirer.prompt(prompt.init).then((answers) => {
    switch (answers.action) {
      case "Manage employees":
        empl.genEmployee();
        break;
      case "Manage departments":
        dept.genDept();
        break;
      case "Manage roles":
        role.genRole();
        break;
      default:
        "Thank you for enabling Big Brother.";

        break;
    }
  });
}

init();
exports.init = init;
