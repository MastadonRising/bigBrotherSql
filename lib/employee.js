const inquirer = require("inquirer");
const db = require("../models/index");
const cTable = require("console.table");
const questions = require("./questions");
const main = require("../index");

async function genEmployee() {
  const emplAction = await inquirer.prompt(questions.genEmpl);

  switch (emplAction.emplChoice) {
    case "View all employees":
      viewEmployees();
    case "Add employee":
      await addEmployee();
      break;
    case "Eliminate employee":
      removeEmployee();
      break;
    default:
      main.init();
      break;
  }
}

exports.genEmployee = genEmployee;

async function getEmployee() {
  let results;
  try {
    results = await db.employee.findAll({
      include: [{ model: db.role }],
    });
  } catch (err) {
    console.log("Something went sideways", err);
  }
  let values = [];
  results.forEach((res) => {
    values.push({
      id: res.id,
      first_name: res.first_name,
      last_name: res.last_name,
      role: res.role.title,
    });
  });
  return values;
}

async function viewEmployees() {
  const db = require("../models/index");
  getEmployee(db).then((data) => {
    console.table(data);
    genEmployee();
  });
}

async function addEmployee() {
  const nd = await inquirer.prompt(questions.addEmplName).then((answers) => {
    db.employee.create({ name: answers.newDept }).then((res) => {
      console.log("New indentured servent");
      genEmployee();
    });
  });
}

async function removeEmployee() {
  const db = require("../models/index");
  let results = await getEmployee(db);
  let choices = [];
  results.forEach((cur) => {
    choices.push(JSON.stringify(cur));
  });
  console.log(choices);
  questions.selectEmpl[0].choices = choices;
  return inquirer.prompt(questions.selectEmpl).then((answers) => {
    results = JSON.parse(answers.empl);
    db.employee.destroy({ where: { id: results.id } }).then((res) => {
      console.log("Employee Deleted");
      genEmployee();
    });
  });
}
