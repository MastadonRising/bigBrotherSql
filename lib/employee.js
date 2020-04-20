const inquirer = require("inquirer");
const db = require("../models/index");
const cTable = require("console.table");
const questions = require("./questions");
const main = require("../index");
const Role = require("./role");

async function genEmployee() {
  const emplAction = await inquirer.prompt(questions.genEmpl);

  switch (emplAction.emplChoice) {
    case "View all employees":
      viewEmployees();
    case "Add employee":
      await addEmployee(db);
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
async function getManagers() {
  let results;
  try {
    results = await db.employee.findAll({
      include: [{ model: db.role, where: { departmentId: 1 } }],
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

async function addEmployee(db) {
  let roles = await Role.getRole(db);
  let managers = await getManagers();
  let roleChoices = [];
  let managerChoices = [];
  roles.forEach((cur) => {
    roleChoices.push(JSON.stringify(cur));
  });
  managers.forEach((cur) => {
    managerChoices.push(JSON.stringify(cur));
  });

  questions.addEmpl[2].choices = roleChoices;
  questions.addEmpl[3].choices = managerChoices;
  const nd = await inquirer.prompt(questions.addEmpl).then((answers) => {
    let { firstName, lastName, role, manager } = answers;
    let roleID = JSON.parse(role);
    let managerID = JSON.parse(manager);
    db.employee
      .create({
        first_name: firstName,
        last_name: lastName,
        roleId: roleID.id,
        managerId: managerID.id,
      })
      .then((res) => {
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
  questions.selectEmpl[0].choices = choices;
  return inquirer.prompt(questions.selectEmpl).then((answers) => {
    results = JSON.parse(answers.empl);
    db.employee.destroy({ where: { id: results.id } }).then((res) => {
      console.log("Employee Deleted");
      genEmployee();
    });
  });
}
