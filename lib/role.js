const inquirer = require("inquirer");
const db = require("../models/index");
const cTable = require("console.table");
const questions = require("./questions");
const main = require("../index");
const dept = require("./department");

async function genRole() {
  const roleAction = await inquirer.prompt(questions.genRole);

  switch (roleAction.roleChoice) {
    case "View all roles":
      viewRoles();
    case "Add role":
      await addRole(db);
      break;
    case "Remove role":
      removeRole();
      break;
    default:
      main.init();
      break;
  }
}

async function getRole() {
  let results;
  try {
    results = await db.role.findAll({
      include: { model: db.department },
    });
  } catch (err) {
    console.log("Something went sideways", err);
  }
  let values = [];
  results.forEach((res) => {
    values.push({
      id: res.id,
      title: res.title,
      department: res.department.name,
    });
  });
  return values;
}

async function viewRoles() {
  const db = require("../models/index");
  getRole(db).then((data) => {
    console.table(data);
    genRole();
  });
}

async function addRole(db) {
  let results = await dept.getDepartments(db);
  let choices = [];
  results.forEach((cur) => {
    choices.push(JSON.stringify(cur));
  });
  questions.addRole[2].choices = choices;

  inquirer.prompt(questions.addRole).then((answers) => {
    let { title, salary, deptId } = answers;
    let dept = JSON.parse(deptId);
    db.role
      .create({
        title: title,
        salary: salary,
        departmentId: dept.id,
      })
      .then((res) => {
        console.log("New Class of indentured servent");
        genRole();
      });
  });
}

async function removeRole() {
  const db = require("../models/index");
  let results = await getRole(db);
  let choices = [];
  results.forEach((cur) => {
    choices.push(JSON.stringify(cur));
  });
  console.log(choices);
  questions.selectRole[0].choices = choices;
  return inquirer.prompt(questions.selectRole).then((answers) => {
    results = JSON.parse(answers.roleId);
    db.role.destroy({ where: { id: results.id } }).then((res) => {
      console.log("Restructure Complete");
      genRole();
    });
  });
}

exports.genRole = genRole;
