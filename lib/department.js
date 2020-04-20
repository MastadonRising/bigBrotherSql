const inquirer = require("inquirer");
const db = require("../models/index");
const cTable = require("console.table");
const questions = require("./questions");
const main = require("../index");

async function genDept() {
  const deptAction = await inquirer.prompt(questions.genDept);

  switch (deptAction.deptChoice) {
    case "View all departments":
      viewDepartments();
    case "Add department":
      await addDepartment();
      break;
    case "Remove department":
      removeDepartment();
      break;
    default:
      main.init();
      break;
  }
}

async function getDepartments() {
  let results;
  try {
    results = await db.department.findAll();
  } catch (err) {
    console.log("Something went sideways", err);
  }
  let values = [];
  results.forEach((res) => {
    values.push({
      id: res.id,
      dept: res.name,
    });
  });
  return values;
}

async function viewDepartments() {
  const db = require("../models/index");
  getDepartments(db).then((data) => {
    console.table(data);
    genDept(db);
  });
}

async function addDepartment() {
  inquirer.prompt(questions.addDept).then((answers) => {
    db.department.create({ name: answers.newDept }).then((res) => {
      console.log("New cash cow");
      genDept();
    });
  });
}

async function removeDepartment() {
  const db = require("../models/index");
  getDepartments(db).then((results) => {
    let choices = [];
    results.forEach((cur) => {
      choices.push(cur.dept);
    });
    questions.selectDept[0].choices = choices;
    inquirer.prompt(questions.selectDept).then((answers) => {
      db.department.destroy({ where: { name: answers.deptId } }).then((res) => {
        console.log("Department Deleted");
        genDept();
      });
    });
  });
}

exports.getDepartments = getDepartments;
exports.genDept = genDept;
